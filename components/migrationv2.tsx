import { abiPtyPool, abiStableVault, abiVault, abiVaultQuery } from '@/config/abi'
import {
  OLD_VAULTS_CONFIG,
  PROTOCOL_SETTINGS_ADDRESS,
  USBSymbol,
  USB_ADDRESS,
  VAULTS_CONFIG,
  VAULT_QUERY_ADDRESS,
} from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { TaskType, useMultiWriteContracts, useWandRead } from '@/hooks/useWand'
import { UnPromise, getBigint, getBigintGt, handleError, proxyGetDef } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { PiWarningFill } from 'react-icons/pi'
import { useToggle } from 'react-use'
import { erc20Abi, parseEther } from 'viem'
import { useAccount } from 'wagmi'
import STable from './simple-table'
import { CoinIcon } from './coinicon'
import { SimpleDialog } from './simple-dialog'
import { Spinner } from './spinner'
import { useQuery } from '@tanstack/react-query'
import _ from 'lodash'

function MarginLoan({ symbol, value }: { symbol: string; value: bigint }) {
  return (
    <div className='flex items-center gap-2 pr-8'>
      <CoinIcon symbol={symbol} size={20} />
      <span>{displayBalance(value)}</span>
    </div>
  )
}

function bnGt(a: bigint) {
  return a >= 200000n ? a : 0n
}
function useMigrationQuery(show: boolean) {
  const chainId = useCurrentChainId()
  const { address } = useAccount()
  const ethVC = OLD_VAULTS_CONFIG[chainId][0]
  const usdbVC = OLD_VAULTS_CONFIG[chainId][1]
  const read = useWandRead()
  const queryFn = async () => {
    const data = await Promise.all(
      [
        {
          abi: erc20Abi,
          address: ethVC.xTokenAddress,
          functionName: 'balanceOf',
          args: [address as any],
        },
        {
          abi: erc20Abi,
          address: usdbVC.xTokenAddress,
          functionName: 'balanceOf',
          args: [address as any],
        },
        {
          abi: abiPtyPool,
          address: ethVC.ptyPoolAboveAddress,
          functionName: 'userStakingBalance',
          args: [address as any],
        },
        {
          abi: abiPtyPool,
          address: ethVC.ptyPoolBelowAddress,
          functionName: 'userStakingBalance',
          args: [address as any],
        },
        {
          abi: erc20Abi,
          address: USB_ADDRESS[chainId],
          functionName: 'balanceOf',
          args: [address as any],
        },

        // ethxTotal
        {
          abi: erc20Abi,
          address: ethVC.xTokenAddress,
          functionName: 'totalSupply',
        },
        {
          abi: abiVault,
          address: ethVC.vault,
          functionName: 'usbTotalSupply',
        },
        // below earn,
        {
          abi: abiPtyPool,
          address: ethVC.ptyPoolBelowAddress,
          functionName: 'earnedStakingYields',
          args: [address as any],
        },
      ].map((item) => read(item as any)),
    )
    const earnEthx = getBigint(data, [7])
    const ethxBalance = getBigint(data, [0])
    const ethxTotal = ethxBalance + earnEthx
    const usdbxBalance = getBigint(data, [1])
    const ethStaked = getBigintGt(data, [2]) // pool locked
    const usbStaked = getBigintGt(data, [3]) // pool locked
    const usbBalance = getBigint(data, [4])
    const usbTotal = usbBalance + usbStaked
    const ethxTotalBn = getBigint(data, [5])
    const ethVaultM_USB = getBigint(data, [6])
    const ethxMarginloan = ethxTotalBn > 0n ? -(ethxTotal * ethVaultM_USB) / ethxTotalBn : 0n

    const assetData = await Promise.all([
      bnGt(ethxBalance)
        ? read({
            abi: abiVaultQuery,
            address: VAULT_QUERY_ADDRESS[chainId],
            functionName: 'calcPairedRedeemAssetAmount',
            args: [ethVC.vault, ethxBalance],
          }).then((res) => res[1])
        : 0n,
      bnGt(usdbxBalance)
        ? read({
            abi: abiVaultQuery,
            address: VAULT_QUERY_ADDRESS[chainId],
            functionName: 'calcRedeemByMarginTokensFromStableVault',
            args: [usdbVC.vault, PROTOCOL_SETTINGS_ADDRESS[chainId], usdbxBalance],
          }).then((res) => res[2])
        : 0n,
    ])
    const ethOutAmount = ethxBalance ? getBigint(assetData, [0]) : 0n
    const usdbOutAmount = usdbxBalance ? getBigint(assetData, [1]) : 0n

    return {
      earnEthx,
      ethxBalance,
      ethxTotal,
      usdbxBalance,
      ethStaked,
      usbStaked,
      usbBalance,
      usbTotal,
      ethxMarginloan,
      ethOutAmount,
      usdbOutAmount,
    }
  }
  return useQuery({
    queryFn,
    queryKey: [chainId, address, show],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: proxyGetDef({} as UnPromise<typeof queryFn>, 0n),
  })
}

export function MigrationV2() {
  const chainId = useCurrentChainId()
  const ethVC = OLD_VAULTS_CONFIG[chainId][0]
  const usdbVC = OLD_VAULTS_CONFIG[chainId][1]
  const ethVC_V2 = VAULTS_CONFIG[chainId][0]
  const usdbVC_V2 = VAULTS_CONFIG[chainId][1]
  const [show, toggleShow] = useToggle(false)
  const { address, chain } = useAccount()
  const { data, isFetching: isQueryLoading } = useMigrationQuery(show)
  const disableOfUSB = data.usbTotal + data.ethxMarginloan < 10000n && bnGt(data.ethxTotal) > 0n
  const disableOfTVl = data.ethxTotal + data.usdbxBalance + data.ethStaked <= 0n
  const { mutateAsync, isPending: isLoading, finishCount, reset } = useMultiWriteContracts()
  const dataChange = Object.values(data).toString()
  const tasks = useMemo(() => {
    const tasks: (TaskType & { name: string })[] = []
    // withdraw usb
    bnGt(data.usbStaked)
      ? tasks.push({
          name: `Withdraw ${USBSymbol} from V1 Earn Pool`,
          abi: abiPtyPool,
          address: ethVC.ptyPoolBelowAddress as any,
          functionName: 'exit',
        })
      : bnGt(data.earnEthx) &&
        tasks.push({
          name: `Withdraw ${USBSymbol} from V1 Earn Pool`,
          abi: abiPtyPool,
          address: ethVC.ptyPoolBelowAddress as any,
          functionName: 'claimAll',
        })
    // withdraw eth
    bnGt(data.ethStaked) &&
      tasks.push({
        name: 'Withdraw ETH from V1 Earn Pool',
        abi: abiPtyPool,
        address: ethVC.ptyPoolAboveAddress as any,
        functionName: 'exit',
        // args: [data.ethBalance],
      })
    // ethx + usb => eth
    bnGt(data.ethxTotal) &&
      tasks.push({
        name: 'Redeem ETH from V1 Vault',
        abi: abiVault,
        address: ethVC.vault as any,
        functionName: 'redeemByPairsWithExpectedMarginTokenAmount',
        args: [data.ethxTotal],
      })
    // eth => ethx + usb
    bnGt(data.ethOutAmount) &&
      tasks.push({
        name: 'Deposit ETH to V2 Vault',
        abi: abiVault,
        address: ethVC_V2.vault as any,
        functionName: 'mintPairs',
        args: [data.ethOutAmount],
        // @ts-ignore
        value: data.ethOutAmount,
      })
    // usdbx => usdb
    bnGt(data.usdbxBalance) &&
      tasks.push({
        name: 'Redeem USDB from V1 Vault',
        abi: abiStableVault,
        address: usdbVC.vault as any,
        functionName: 'redeemByMarginTokens',
        args: [data.usdbxBalance],
      })
    // usdb => usdbx
    bnGt(data.usdbOutAmount) &&
      address &&
      tasks.push({
        name: 'Deposit USDB to V2 Vault',
        abi: abiStableVault,
        address: usdbVC_V2.vault as any,
        functionName: 'mintMarginTokens',
        args: [data.usdbOutAmount],
        prepare: async (task, pc, wc) => {
          const usdbBalance = await pc.readContract({
            abi: erc20Abi,
            address: usdbVC_V2.assetTokenAddress,
            functionName: 'balanceOf',
            args: [address as any],
          })
          const amount = usdbBalance < data.usdbOutAmount ? usdbBalance : data.usdbOutAmount
          const allowance = await pc.readContract({
            abi: erc20Abi,
            address: usdbVC_V2.assetTokenAddress,
            functionName: 'allowance',
            args: [address as any, usdbVC_V2.vault as any],
          })
          if (allowance < amount) {
            const hash = await wc.writeContract({
              chain,
              account: address,
              abi: erc20Abi,
              address: usdbVC_V2.assetTokenAddress,
              functionName: 'approve',
              args: [usdbVC_V2.vault as any, parseEther('100000000000')],
            })
            await pc.waitForTransactionReceipt({ hash, confirmations: 5 })
          }
          return {
            ...task,
            args: [amount],
          }
        },
      })
    return tasks
  }, [dataChange, ethVC, ethVC_V2, usdbVC, usdbVC_V2, chain?.id, address])
  useEffect(() => {
    reset()
  }, [dataChange])
  const isFinish = finishCount == tasks.length
  const disable = disableOfUSB || isLoading || isQueryLoading
  const triggerRef = useRef<HTMLButtonElement>(null)
  const migrate = async () => {
    try {
      if (isFinish) return triggerRef.current?.click()
      if (disableOfTVl) return
      console.info('tasks:', tasks)
      await mutateAsync(tasks)
    } catch (error) {
      handleError(error)
    }
  }
  const r = useRouter()
  const pathname = usePathname()
  const onClickToVaults = () => {
    if (pathname == '/vaults') return triggerRef.current?.click()
    r.push('/vaults')
  }

  return (
    <SimpleDialog
      disableOutClose
      style={
        {
          // background:
          //   'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(228, 228, 228, 0.8) 50.49%, rgba(255, 255, 255, 0.8) 100%)',
        }
      }
      open={show}
      onOpenChange={toggleShow}
      className='backdrop-blur-lg max-w-[800px]'
      disableClose={isLoading}
      triggerProps={{ className: 'shrink-0' }}
      trigger={<button className='btn-primary mt-0'>MIGRATION TO V2</button>}
    >
      <div className='card flex flex-col gap-4 !bg-transparent'>
        <div className='page-sub text-left'>MIGRATION TO V2</div>
        <div>Before migration, make sure your {USBSymbol} balance is greater than your margin loan.</div>
        {isQueryLoading ? (
          <div className='flex justify-center items-center h-[357px]'>
            <Spinner />
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='rounded-lg overflow-x-auto w-full bg-zinc-200 dark:bg-slate-950 pb-2'>
                <STable
                  header={['', 'Balance', 'Margin loan']}
                  data={[
                    [
                      'ETHx-V1',
                      displayBalance(bnGt(data.ethxTotal)),
                      <MarginLoan symbol={USBSymbol} value={data.ethxMarginloan} key={'ethx_ml'} />,
                    ],
                    ['USDBx-V1', displayBalance(bnGt(data.usdbxBalance)), ''],
                    ['ETH-V1', displayBalance(bnGt(data.ethStaked)), ''],
                    [USBSymbol, displayBalance(data.usbTotal), ''],
                  ]}
                />
              </div>
              <div className='flex flex-col pl-3 pt-5 gap-1 md:pl-5 md:pt-2'>
                <div className='text-lg'>Progress</div>
                {tasks.map((task, index) => (
                  <div key={'task_' + index} className='flex items-center gap-2'>
                    <span>- {task.name}</span>
                    {index < finishCount && <MdCheckCircle className='text-green-500' />}
                    {isLoading && index == finishCount && <Spinner />}
                  </div>
                ))}
              </div>
            </div>
            <button className='btn-primary flex items-center gap-2 justify-center' disabled={disable} onClick={migrate}>
              {isLoading && <Spinner />}
              {isFinish && <MdCheckCircle className='text-green-500' />}
              {isLoading ? 'Migrating' : finishCount == tasks.length ? 'Completed' : 'Start to Migration'}
            </button>
            {disableOfUSB && (
              <div className='text-center'>
                <span>{USBSymbol} balance is insufficient. </span>
                <span>Mint more {USBSymbol} from the</span>{' '}
                <button
                  className='underline text-indigo-500 dark:text-violet-300 outline-none inline-block'
                  onClick={onClickToVaults}
                >
                  USDB V2 Vault
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </SimpleDialog>
  )
}

export function MigrationTip() {
  const chainId = useCurrentChainId()
  const oldvcs = OLD_VAULTS_CONFIG[chainId]
  const showMigration = oldvcs && oldvcs.length > 0
  if (!showMigration) return null
  return (
    <div className='flex flex-col justify-center gap-4 items-center md:flex-row'>
      <div className='text-sm text-red-500 p-2 rounded bg-[#FFE5E0] flex items-center gap-2'>
        <div className='p-1 rounded bg-red-500'>
          <PiWarningFill className='text-white' />
        </div>
        Wand has been updated to Version2. Please ensure you complete the migration of your assets promptly.
      </div>
      <MigrationV2 />
    </div>
  )
}
