import { getErrorMsg } from '@/lib/utils'
import { useState } from 'react'
import { toast } from 'sonner'
import {
  Abi,
  Account,
  Address,
  Chain,
  ContractFunctionArgs,
  ContractFunctionName,
  SimulateContractParameters,
} from 'viem'
import { usePublicClient, useWalletClient } from 'wagmi'
import { useWandTimestamp } from './useWand'
import { useWrapPublicClient } from './useWrapPublicClient'

export function useWrapContractWrite<
  const abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'nonpayable' | 'payable', functionName>,
  chainOverride extends Chain | undefined,
  accountOverride extends Account | Address | undefined = undefined,
>(
  config:
    | SimulateContractParameters<abi, functionName, args, Chain, chainOverride, accountOverride>
    | (() => Promise<SimulateContractParameters<abi, functionName, args, Chain, chainOverride, accountOverride>>),
  opts?: {
    autoToast?: boolean
    onSuccess?: () => void
  },
) {
  const { autoToast = true, onSuccess } = opts || {}
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const pc = useWrapPublicClient()
  const { data: wc } = useWalletClient()
  const isDisabled = !pc || !wc || !wc.account || isLoading || !config
  const wt = useWandTimestamp()
  const write = async () => {
    if (isDisabled) return
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const mconfig: SimulateContractParameters<abi, functionName, args, Chain, chainOverride, accountOverride> = (
        typeof config == 'function' ? await config() : config
      ) as any

      const { request } = await pc.simulateContract({ account: wc.account, ...mconfig } as any)

      const hash = await wc.writeContract(request)
      const txr = await pc.waitForTransactionReceipt({ hash })
      if (txr.status !== 'success') {
        throw 'Transaction reverted'
      }
      setIsSuccess(true)
      onSuccess && onSuccess()
      autoToast && toast.success('Transaction success')
      wt.update()
    } catch (error) {
      autoToast && toast.error(getErrorMsg(error))
    }
    setIsLoading(false)
  }
  return {
    write,
    isDisabled,
    isLoading,
    isSuccess,
  }
}
