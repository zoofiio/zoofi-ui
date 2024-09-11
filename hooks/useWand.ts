import { useMutation } from '@tanstack/react-query'
import _ from 'lodash'
import { useState } from 'react'
import { Abi, ContractFunctionArgs, ContractFunctionName, ContractFunctionParameters, PublicClient, ReadContractParameters, WalletClient } from 'viem'
import {
  Config,
  ResolvedRegister,
  useReadContract,
  useReadContracts,
  useWalletClient,
  type UseReadContractParameters,
  type UseReadContractsParameters
} from 'wagmi'
import { ReadContractData, ReadContractsData } from 'wagmi/query'
import { create } from 'zustand'
import { useWrapPublicClient } from './useWrapPublicClient'
export const useWandTimestamp = create<{ time: number; update: () => void }>((set) => ({
  time: _.now(),
  update: () => {
    set({ time: _.now() })
  },
}))


// export const useWandContractRead = useContractRead;
export function useWandContractRead<
  const abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'pure' | 'view'>,
  args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName>,
  config extends Config = ResolvedRegister['config'],
  selectData = ReadContractData<abi, functionName, args>,
>(config: UseReadContractParameters<abi, functionName, args, config, selectData>) {
  const { time } = useWandTimestamp()
  // @ts-ignore
  return useReadContract({
    ...config,
    query: {
      placeholderData: (old) => old,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...(config.query || {}),
    },
    wandtime: time,
  } as UseReadContractParameters<abi, functionName, args, config, selectData>)
}
// export const useWandContractReads = useContractReads
export function useWandContractReads<
  contracts extends readonly unknown[] = readonly ContractFunctionParameters[],
  allowFailure extends boolean = true,
  config extends Config = Config,
  selectData = ReadContractsData<contracts, allowFailure>,
>(configs: UseReadContractsParameters<contracts, allowFailure, config, selectData>) {
  const { time } = useWandTimestamp()
  // @ts-ignore
  return useReadContracts({
    ...configs,
    query: {
      placeholderData: (old) => old,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...(configs.query || {}),
    },
    wandtime: time,
  } as UseReadContractsParameters<contracts, allowFailure, config, selectData>)
}

export type TaskType = UseReadContractParameters<Abi, string> & {
  prepare?: (task: TaskType, pc: PublicClient, wc: WalletClient) => Promise<TaskType>
}
export function useMultiWriteContracts() {
  const { data: wc } = useWalletClient()
  const pc = useWrapPublicClient()
  const [finishCount, setFinishCount] = useState(0)
  const wt = useWandTimestamp()
  const res = useMutation({
    mutationFn: async (tasks: TaskType[]) => {
      if (!pc || !wc || !wc.account) return
      let index = 0
      for (let task of tasks) {
        if (index >= finishCount) {
          task.prepare && (task = await task.prepare(task, pc, wc))
          const { request } = await pc.simulateContract({ account: wc.account, ...task } as any)
          const hash = await wc.writeContract(request)
          await pc.waitForTransactionReceipt({ hash, confirmations: 5 })
          wt.update()
          setFinishCount((count) => count + 1)
        }
        index++
      }
    },
  })
  return { ...res, finishCount, reset: () => setFinishCount(0) }
}

export function useWandRead() {
  const pc = useWrapPublicClient()
  const read = async <
    const abi extends Abi | readonly unknown[],
    functionName extends ContractFunctionName<abi, 'pure' | 'view'>,
    args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName>,
  >(
    params: ReadContractParameters<abi, functionName, args>,
  ) => {
    if (!pc) throw 'no pc'
    return pc.readContract(params)
  }
  return read
}
