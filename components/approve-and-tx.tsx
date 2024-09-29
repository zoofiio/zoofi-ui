import { useApproves } from '@/hooks/useApprove'
import { useWrapContractWrite } from '@/hooks/useWrapContractWrite'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Abi, Account, Address, Chain, ContractFunctionArgs, ContractFunctionName, SimulateContractParameters } from 'viem'

import { Spinner } from './spinner'

export function ApproveAndTx<
  const abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'nonpayable' | 'payable', functionName>,
  chainOverride extends Chain | undefined,
  accountOverride extends Account | Address | undefined = undefined,
>({
  className,
  txType = 'btn-primary',
  tx,
  busyShowTxet = true,
  approves,
  spender,
  requestAmount,
  config,
  toast = true,
  skipSimulate = false,
  disabled,
  onTxSuccess,
  onApproveSuccess,
}: {
  className?: string
  txType?: 'btn-link' | 'btn-primary'
  tx: string
  busyShowTxet?: boolean
  approves?: { [k: Address]: bigint }
  spender?: Address
  requestAmount?: bigint
  config: SimulateContractParameters<abi, functionName, args, Chain, chainOverride, accountOverride> & {
    enabled?: boolean
  }
  toast?: boolean
  skipSimulate?: boolean
  disabled?: boolean
  onTxSuccess?: () => void
  onApproveSuccess?: () => void
}) {
  const { write: doTx, isDisabled, isLoading: isTxLoading } = useWrapContractWrite(config as any, { onSuccess: () => onTxSuccess && onTxSuccess(), autoToast: toast, skipSimulate })
  const txDisabled = disabled || isDisabled || isTxLoading || config.enabled === false
  const { approve, shouldApprove, loading: isApproveLoading, isSuccess: isApproveSuccess } = useApproves(approves || {}, spender, requestAmount)
  const onApproveSuccessRef = useRef<() => void>()
  onApproveSuccessRef.current = onApproveSuccess
  useEffect(() => {
    onApproveSuccessRef.current && isApproveSuccess && onApproveSuccessRef.current()
  }, [isApproveSuccess])

  const approveDisabled = disabled || !approve || isApproveLoading

  if (shouldApprove)
    return (
      <button className={twMerge(txType, 'flex items-center justify-center gap-4', className)} onClick={approve} disabled={approveDisabled}>
        {isApproveLoading && <Spinner />}
        {'Approve'}
      </button>
    )
  return (
    <button className={twMerge(txType, 'flex items-center justify-center gap-4', className)} onClick={() => doTx()} disabled={txDisabled}>
      {isTxLoading && <Spinner />}
      {(busyShowTxet || !isTxLoading) && tx}
    </button>
  )
}
