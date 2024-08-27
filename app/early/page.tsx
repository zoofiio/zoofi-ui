'use client'

import ConnectBtn from '@/components/connet-btn'
import { DataBase } from '@/components/icons/database'
import { MigrationTip } from '@/components/migrationv2'
import STable from '@/components/simple-table'
import { Spinner } from '@/components/spinner'
import { useThemeState } from '@/components/theme-mode'
import { Tip } from '@/components/ui/tip'
import {
  getBlastPoints,
  getInviteCodes,
  getInvitees,
  getRank,
  getUserState,
  refreshInviteCode,
  userLogin,
} from '@/config/api'
import { THUSTER_LP, USBSymbol } from '@/config/swap'
import { DECIMAL } from '@/constants'
import useCopy from '@/hooks/useCopy'
import { useThusterLPTvl } from '@/hooks/useThusterLPTvl'
import {
  UnPromise,
  cn,
  fmtPercent,
  fmtTime,
  handleError,
  parseEthers,
  shortStr,
  swapThrusterLink,
  tryParse,
} from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import numeral from 'numeral'
import { MouseEventHandler, ReactElement, useEffect, useMemo, useRef, useState } from 'react'
import { useAsyncRetry, useMeasure } from 'react-use'
import VerificationInput from 'react-verification-input'
import { List } from 'react-virtualized'
import { toast } from 'sonner'
import { Address, formatEther } from 'viem'
import { useAccount, useSignMessage } from 'wagmi'
import { create } from 'zustand'

const GalxeLink = 'https://app.galxe.com/quest/Wand/GC9T8t44ov'

type EarlyState = {
  loading: boolean
  userState?: UnPromise<typeof getUserState>
  inviteCodes: UnPromise<typeof getInviteCodes>
  blastPoints?: UnPromise<typeof getBlastPoints>
  update: (s: Partial<EarlyState>) => void
  loadingReInviteCode: boolean
  reInviteCode: () => Promise<void>
}
const useEarlyState = create<EarlyState>((set) => {
  return {
    loading: false,
    inviteCodes: [],
    update: set,
    loadingReInviteCode: false,
    reInviteCode: async () => {
      try {
        set({ loadingReInviteCode: true })
        const codes = await refreshInviteCode()
        set({ inviteCodes: codes })
      } catch (error) {
        throw error
      } finally {
        set({ loadingReInviteCode: false })
      }
    },
  }
})

const useDelayShowPage = (delay: number = 200) => {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
    setTimeout(() => setShowPage(true), delay)
  }, [])
  return showPage
}

export default function EarlyPage() {
  const { address } = useAccount()
  const showPage = useDelayShowPage()
  const { signMessageAsync } = useSignMessage()
  const [verCode, setVerCode] = useState('')
  // 1 login页面 2 活动页面
  const [stage, setStage] = useState(1)
  const { loading, update, userState } = useEarlyState()
  const params = useSearchParams()
  const paramCode = params.get('code')
  useEffect(() => {
    console.info('code:', paramCode)
    if (typeof paramCode == 'string' && paramCode.length == 5) setVerCode(paramCode.toUpperCase())
  }, [paramCode])

  const prepareTokens = async (user: Address) => {
    const olds: { [k: string]: string } = tryParse(localStorage.getItem('earlyaccess-tokens'), {})
    if (olds[user]) {
      localStorage.setItem('earlyaccess-token', olds[user])
    } else {
      const signatrue = await signMessageAsync({ message: user })
      const token = 'Basic ' + btoa(`${address}:${signatrue}`)
      localStorage.setItem('earlyaccess-tokens', JSON.stringify({ ...olds, [user]: token }))
      localStorage.setItem('earlyaccess-token', token)
    }
  }
  const ref = useRef(false)
  const loadUserDatas = async function () {
    let retryCount = 3
    while (true) {
      try {
        const [userState, inviteCodes, blastPoints] = await Promise.all([
          getUserState(),
          getInviteCodes(),
          getBlastPoints(),
        ])
        update({ userState, inviteCodes, blastPoints })
        setStage(2)
        break
      } catch (error) {
        console.error(error)
        if (retryCount > 0) {
          retryCount--
          await new Promise((resolve) => setTimeout(resolve, 2000))
        } else {
          throw error
        }
      }
    }
  }
  const firstLoadDatas = (address: Address) => {
    setTimeout(() => {
      if (ref.current) return
      ref.current = true
      update({ loading: true })
      prepareTokens(address)
        .then(loadUserDatas)
        .catch(() => setStage(1))
        .finally(() => {
          update({ loading: false })
          ref.current = false
        })
    }, 100)
  }
  useEffect(() => {
    address && firstLoadDatas(address)
    !address && setStage(1)
  }, [address])
  useEffect(() => {
    !userState && address && firstLoadDatas(address)
  }, [userState])

  const onEnter = async () => {
    if (!address || !verCode) return
    try {
      update({ loading: true })
      await prepareTokens(address)
      const result = await userLogin(verCode)
      localStorage.setItem('earlyaccess-uid', result.userId)
      await loadUserDatas()
      update({ loading: false })
    } catch (error) {
      update({ loading: false })
      toast.error('Enter Invited Code failed')
    }
  }
  const onVerChange = (v: string) => {
    setVerCode(v.toUpperCase())
  }
  if (!showPage) return null
  if (loading)
    return (
      <div className='flex justify-center items-center w-full min-h-[80vh]'>
        <Spinner className='!w-10 !h-10' />
      </div>
    )
  return (
    <>
      <MigrationTip />
      {stage == 1 && (
        <div className='flex justify-center w-full'>
          <div className='w-full px-4 max-w-[662px] md:mt-[78px]'>
            <InitialAirdrop />
            <div className='w-full text-center text-base md:text-2xl font-bold text-slate-700 dark:text-slate-50'>
              Early Access Campaign
            </div>
            <div className='w-full text-center my-4 md:my-6 py-2 px-2.5 text-xs text-indigo-500 dark:text-violet-300 bg-slate-50 rounded-full border border-indigo-500 dark:text-violet-300 dark:violet-300 dark:bg-transparent'>
              Wand will reward 100% of the received Blast Developer Airdrop to early access users.{' '}
            </div>
            <div className='w-full text-xs md:text-base text-center font-medium text-slate-500 dark:text-slate-50/40'>
              Enter your invite code to participate in the campaign.
            </div>
            <div className='w-full flex shadow-sm my-3 md:my-6 items-center justify-center h-[190px] p-4 md:p-24 bg-white rounded-[16px] border border-slate-200 dark:border-zinc-600 dark:bg-slate-950'>
              <VerificationInput
                validChars='A-Za-z0-9'
                placeholder='_'
                length={5}
                value={verCode}
                classNames={{
                  container: 'w-full max-w-[290px]',
                  character:
                    'rounded-lg uppercase dark:bg-transparent dark:text-slate-50 dark:border dark:border-zinc-600',
                }}
                onChange={onVerChange}
              />
            </div>
            {!address && (
              <div className='w-full flex justify-center items-center'>
                <ConnectBtn />
              </div>
            )}
            {address && (
              <div
                className='w-full text-center h-[40px] mb-[30px] px-[16px] py-[8px] text-white bg-[#64738B] dark:bg-violet-300 dark:text-black rounded-[6px] cursor-pointer'
                onClick={onEnter}
              >
                {'Enter Invite Code'}
              </div>
            )}
            <div className='w-full text-xs md:text-base text-center my-3 md:my-6 font-medium text-slate-500 dark:text-slate-50/70'>
              The duration aligns with Blast Developer Airdrop.
            </div>
          </div>
        </div>
      )}
      {stage == 2 && <AccessPage />}
    </>
  )
}

function InitialAirdrop() {
  return (
    <div className='flex flex-col p-4 gap-8 bg-[#F3F3FF] dark:bg-slate-700 rounded-xl w-full mb-5'>
      <div className='text-base md:text-2xl font-bold text-slate-700 dark:text-slate-50'>Initial Airdrop:</div>
      <div className='text-xs border-1 border-indigo-500'>
        Users who participated in the{' '}
        <a
          href={GalxeLink}
          target='_blank'
          className='underline text-indigo-500 dark:text-violet-300 dark:text-violet-300'
        >
          Galxe Blast Takeover
        </a>{' '}
        and Blast Early Access will receive initial points.
      </div>
    </div>
  )
}

function NavButton({
  icon,
  title,
  clicked,
  onButtonClick,
}: {
  icon: any
  title: string
  clicked: boolean
  onButtonClick: MouseEventHandler
}) {
  return (
    <div
      className={clsx(
        'p-5 flex-1 flex items-center justify-center cursor-pointer md:flex-none md:p-6 md:justify-start',
        {
          'text-indigo-500 dark:text-violet-300 md:text-slate-500 md:bg-white md:rounded-lg md:border md:border-gray-300 md:shadow-sm dark:bg-transparent dark:text-violet-300 dark:border-zinc-600':
            clicked,
          'text-slate-500 dark:text-slate-50': !clicked,
        },
      )}
      onClick={onButtonClick}
    >
      <div className='w-[18px] h-[18px] mr-[10px]'>{icon}</div>
      <span className='text-sm font-semibold'>{title}</span>
    </div>
  )
}

const points = (
  <svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
    <path d='M5 17L8.5 13L12 17H5Z' fill='currentColor' />
    <rect
      x='0.123779'
      y='8.99426'
      width='16.3459'
      height='1.6201'
      rx='0.81005'
      transform='rotate(4.38067 0.123779 8.99426)'
      fill='currentColor'
    />
    <circle cx='3.62378' cy='3.5' r='2.75' stroke='currentColor' strokeWidth='1.5' />
    <path
      d='M15.8738 4.95852C15.8738 6.20116 14.8664 7.20852 13.6238 7.20852C12.3811 7.20852 11.3738 6.20116 11.3738 4.95852C11.3738 3.71588 12.3811 2.70852 13.6238 2.70852C14.8664 2.70852 15.8738 3.71588 15.8738 4.95852Z'
      stroke='currentColor'
      strokeWidth='1.5'
    />
  </svg>
)
const quests = (
  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
    <path
      d='M14.625 10.6875V8.71875C14.625 8.04742 14.3583 7.40359 13.8836 6.92889C13.4089 6.45418 12.7651 6.1875 12.0938 6.1875H10.9688C10.745 6.1875 10.5304 6.09861 10.3721 5.94037C10.2139 5.78214 10.125 5.56753 10.125 5.34375V4.21875C10.125 3.54742 9.85832 2.90359 9.38361 2.42889C8.90891 1.95418 8.26508 1.6875 7.59375 1.6875H6.1875M6.75 12.375V12.9375M9 10.6875V12.9375M11.25 9V12.9375M7.875 1.6875H4.21875C3.753 1.6875 3.375 2.0655 3.375 2.53125V15.4688C3.375 15.9345 3.753 16.3125 4.21875 16.3125H13.7812C14.247 16.3125 14.625 15.9345 14.625 15.4688V8.4375C14.625 6.64729 13.9138 4.9304 12.648 3.66453C11.3821 2.39866 9.66521 1.6875 7.875 1.6875Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const invite = (
  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
    <path
      d='M5.41276 8.18022C5.23116 7.85345 4.94619 7.59624 4.60259 7.44895C4.25898 7.30167 3.8762 7.27265 3.51432 7.36645C3.15244 7.46025 2.83196 7.67157 2.60317 7.96722C2.37438 8.26287 2.25024 8.62613 2.25024 8.99997C2.25024 9.37381 2.37438 9.73706 2.60317 10.0327C2.83196 10.3284 3.15244 10.5397 3.51432 10.6335C3.8762 10.7273 4.25898 10.6983 4.60259 10.551C4.94619 10.4037 5.23116 10.1465 5.41276 9.81972M5.41276 8.18022C5.54776 8.42322 5.62501 8.70222 5.62501 8.99997C5.62501 9.29772 5.54776 9.57747 5.41276 9.81972M5.41276 8.18022L12.5873 4.19472M5.41276 9.81972L12.5873 13.8052M12.5873 4.19472C12.6924 4.39282 12.8361 4.56797 13.0097 4.70991C13.1834 4.85186 13.3836 4.95776 13.5987 5.02143C13.8138 5.08509 14.0394 5.10523 14.2624 5.08069C14.4853 5.05614 14.7011 4.98739 14.8972 4.87846C15.0933 4.76953 15.2657 4.62261 15.4043 4.44628C15.5429 4.26995 15.645 4.06775 15.7046 3.85151C15.7641 3.63526 15.78 3.40931 15.7512 3.18686C15.7225 2.96442 15.6496 2.74994 15.537 2.55597C15.3151 2.17372 14.952 1.89382 14.5259 1.77643C14.0997 1.65904 13.6445 1.71352 13.2582 1.92818C12.8718 2.14284 12.585 2.50053 12.4596 2.92436C12.3341 3.34819 12.38 3.80433 12.5873 4.19472ZM12.5873 13.8052C12.4796 13.999 12.4112 14.2121 12.3859 14.4323C12.3606 14.6525 12.3789 14.8756 12.4398 15.0887C12.5007 15.3019 12.603 15.5009 12.7408 15.6746C12.8787 15.8482 13.0494 15.9929 13.2431 16.1006C13.4369 16.2082 13.65 16.2767 13.8702 16.302C14.0905 16.3273 14.3135 16.3089 14.5267 16.248C14.7398 16.1871 14.9389 16.0848 15.1125 15.947C15.2861 15.8092 15.4309 15.6385 15.5385 15.4447C15.7559 15.0534 15.809 14.5917 15.686 14.1612C15.563 13.7307 15.274 13.3668 14.8826 13.1493C14.4913 12.9319 14.0296 12.8789 13.5991 13.0019C13.1686 13.1249 12.8047 13.4139 12.5873 13.8052Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const formatNumber = (str: string = '0', format: string = '0,0.000') => {
  const number = numeral(str).value() || 0
  const result = numeral(number).format(format)
  return result
}

function SectionTitle({
  title,
  sub,
  tip,
  className,
}: {
  title: string
  sub?: string
  tip?: string
  className?: string
}) {
  return (
    <div className={cn('w-full text-lg gap-1 font-semibold flex items-center', className)}>
      {title} <span className='text-base'>{sub}</span>
      {!!tip && <Tip className='text-slate-500 dark:text-slate-50 text-lg'>{tip}</Tip>}
    </div>
  )
}

function ThusterProtocol() {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/thuster.svg' width={20} height={20} alt='ThusterIcon' />
      <span>Thruster</span>
    </div>
  )
}

function AccessPage() {
  const [pageIndex, setPageIndex] = useState(0)
  const { userState, blastPoints } = useEarlyState()
  const [ref, { width }] = useMeasure()
  const { value: items = [] } = useAsyncRetry(getRank, [])
  const renderRow = (param: { index: number }) => {
    const { index } = param
    const item = items[index]
    return (
      <div className='flex flex-1 text-[14px] text-[#64748B] font-medium leading-[14px]'>
        <div className='w-1/12'>{index + 1}</div>
        <div className='w-9/12'>{item.address}</div>
        <div className='w-2/12'>{item.total_point}</div>
      </div>
    )
  }
  const r = useRouter()
  console.log(pageIndex)
  const myShare = useMemo(() => {
    if (!blastPoints) return '0%'
    const sum = parseEthers(blastPoints.sumUserTvl || '0')
    if (sum == 0n) return '0%'
    const uTvl = parseEthers(blastPoints.userTvl || '0')
    if (uTvl == 0n) return '0%'
    return numeral(formatEther((uTvl * DECIMAL * 100n) / sum)).format('0.00') + '%'
  }, [blastPoints])
  const completed = useMemo(() => {
    let count = 0
    userState?.glaxe && count++
    userState?.minted && count++
    return count
  }, [userState])
  const lpTvls = useThusterLPTvl()
  const defis = useMemo(
    () => {
      return THUSTER_LP.map((lp) => [
        <ThusterProtocol key='name' />,
        <a key='link' className='underline' target='_blank' href={swapThrusterLink(lp.token1, lp.token0)}>
          {lp.token1Symbol} / {lp.token0Symbol} - V2(0.3% fee)
        </a>,
        `$${displayBalance(lpTvls[lp.address].tvl, 2, { notation: 'compact' })}`,
        `${fmtPercent(lpTvls[lp.address].userShare, 18, 2)}`,
        lp.token0Symbol == 'WETH' ? '6X' : lp.token1Symbol == USBSymbol ? '2X' : '3X',
      ])
    },
    THUSTER_LP.map((lp) => lpTvls[lp.address]),
  )

  if (!userState) return null
  return (
    <div className='py-1 md:py-[22px] w-full max-w-[1440px] flex flex-col md:flex-row justify-between m-auto px-4'>
      <div className='w-full flex border-b border-solid border-gray-300 md:border-none md:flex-col md:w-[234px] md:mr-6 dark:border-zinc-600'>
        <NavButton
          icon={points}
          title='Points'
          onButtonClick={() => {
            setPageIndex(0)
          }}
          clicked={pageIndex === 0}
        />
        <NavButton
          icon={quests}
          title='Quests'
          onButtonClick={() => {
            setPageIndex(1)
          }}
          clicked={pageIndex === 1}
        />
        <NavButton
          icon={invite}
          title='Invites'
          onButtonClick={() => {
            setPageIndex(2)
          }}
          clicked={pageIndex === 2}
        />
      </div>
      {pageIndex === 0 && (
        <div className='w-full py-4 md:py-0 md:w-[calc(100%-254px)]'>
          <SectionTitle
            title='Blast Points'
            tip='Wand will distribute all Blast Points harvested by the smart contract to users based on their TVL Contribution.'
          />
          <div
            style={{ background: 'linear-gradient(-30deg,rgba(18, 185, 129, 0.15), transparent 70%' }}
            className='flex items-center gap-5 md:gap-[80px] text-emerald-500 pl-5 my-3 w-full md:w-fit border border-solid border-emerald-500 rounded-3xl'
          >
            <div className='flex flex-col gap-4'>
              <div className='text-sm'>Pending Distribution Points Pool</div>
              <div className='text-lg font-semibold md:text-2xl '>
                {formatNumber(blastPoints?.totalBlastPoint || '0', '0,0')}
              </div>
            </div>
            <DataBase className='text-[120px] ml-auto' />
          </div>
          <div className='flex items-center gap-5 pl-5 text-sm font-medium md:text-base'>
            <div>My Share: {myShare}</div>
            <div>Points Received: {formatNumber(blastPoints?.distributionHistory || '0', '0,0')}</div>
          </div>
          <SectionTitle
            className='mt-10'
            title='Blast Gold'
            sub='(Developer Airdrop)'
            tip='Wand will distribute Blast Gold to our users based on their Wand Points.'
          />
          <SectionTitle className='mt-10' title='My Wand Points' />
          <div className='grid grid-cols-1 mt-4 md:mt-0 md:grid-cols-3 gap-6 w-full'>
            <div className='flex flex-col gap-5 w-full'>
              <div className='h-full bg-white  shadow-sm border border-[#E4E4E7] rounded-[16px] p-4 md:p-6 dark:bg-transparent dark:border-zinc-600'>
                <div className='text-gray-700 dark:text-slate-50 text-sm md:text-lg font-semibold flex items-center leading-[24px] tracking-tight'>
                  Base Points
                </div>
                <div className='flex justify-between text-xs md:text-sm font-medium items-center mt-4 md:mt-8'>
                  <div>My Contribution</div>
                  <div>{formatNumber(userState.tvl)}</div>
                </div>
                <div className='flex justify-between text-xs md:text-sm font-medium items-center mt-2'>
                  <div>From Invitees</div>
                  <div>{formatNumber(userState.fromInvitees)}</div>
                </div>
              </div>
              <div className='relative h-full bg-[#12B981] text-white rounded-[16px] overflow-hidden p-4 md:p-6'>
                <Image className='absolute right-10 top-0 z-0' src='./greenCycle.png' height={163} width={322} alt='' />
                <div className='text-[14px] font-medium leading-[14px] z-10 relative'>Total Points</div>
                <div className='text-2xl font-bold mt-[27px] relative z-10'>
                  {formatNumber(userState.totalPoint)}{' '}
                  <span className='text-base'>+{100 * userState.boostPercent}% boost from Quests</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full h-full bg-white shadow-sm border border-[#E4E4E7] rounded-[16px]  p-4 md:p-6 md:col-span-2 dark:bg-transparent dark:border-zinc-600'>
              <div className='text-gray-700 dark:text-slate-50 text-sm md:text-lg font-semibold flex items-center leading-[24px] tracking-tight'>
                DeFi Integrations
              </div>
              <div className='flex-1 overflow-x-auto w-full mt-2 md:mt-4'>
                <STable
                  header={[
                    'Protocol',
                    'Pool',
                    'TVL',
                    'My Share',
                    <div className='flex items-center gap-1' key={'boost'}>
                      Boost<Tip inFlex>Wand assets in DeFi Pool obtain more Wand Points.</Tip>
                    </div>,
                  ]}
                  data={defis}
                  empty={
                    <tr className='text-lg font-normal text-center text-black dark:text-slate-50/70'>
                      <td colSpan={100} className='h-[100px] text-sm py-5 align-top'>
                        Coming Soon
                      </td>
                    </tr>
                  }
                />
              </div>
            </div>
          </div>
          <SectionTitle className='mt-10 hidden' title='Leaderboard' />
          <div className='p-4 md:p-6 bg-white h-auto shadow-sm border-1 border-[#E4E4E7] rounded-[16px] overflow-x-auto hidden'>
            <div
              ref={ref as any}
              className='flex flex-1 text-[14px] text-[#64748B] font-medium leading-[14px] mb-[30px] w-full min-w-[600px]'
            >
              <div className='w-1/12'>Rank</div>
              <div className='w-9/12'>User</div>
              <div className='w-2/12'>Points</div>
            </div>
            <List
              width={Math.max(width, 600)}
              height={14}
              rowHeight={14}
              rowCount={items.length}
              rowRenderer={renderRow}
              autoHeight={true}
              className='no-scrollbar'
            />
          </div>
        </div>
      )}
      {pageIndex === 1 && (
        <div className='w-full py-4 md:py-0'>
          <div className='hidden md:flex w-full h-[58px] text-[#0F172A] text-sm md:text-2xl font-semibold items-center'>
            Quest
          </div>
          <div className='grid col-start-1 col-span-1 md:grid-cols-2 gap-6'>
            <QuestArea name='Quest1' checked={userState.glaxe == 1}>
              <div className='h-full flex flex-col'>
                <div className='flex'>
                  <Image src='./galxe.png' alt='galxe' width={120} height={120} />
                  <span className='text-[18px] py-4 font-semibold leading-[18px] text-[#334155] dark:text-slate-50 ml-[20px]'>
                    Participate in Blast Takeover Campaign
                  </span>
                </div>
                <div
                  className='w-full cursor-pointer mt-auto text-center h-[40px] px-[16px] py-[8px] text-white bg-[#64738B] dark:text-black dark:bg-violet-300 rounded-[6px]'
                  onClick={() => window.open(GalxeLink, '_blank')}
                >
                  {'Go to the Page'}
                </div>
              </div>
            </QuestArea>
            <QuestArea name='Quest2' checked={userState.minted == 1}>
              <div className='h-full flex flex-col'>
                <div className='flex flex-1 justify-center items-center'>
                  <span className='text-[18px] text-center font-semibold leading-[18px] text-[#334155] dark:text-slate-50'>
                    Deposit at least 0.2 ETH into the ETH Vault
                  </span>
                </div>
                <div className='w-full h-[40px] flex gap-5'>
                  <div
                    className='cursor-pointer bg-[#64738B] dark:bg-violet-300 flex-1 h-full rounded-[6px] px-5 py-2 text-center text-white dark:text-black'
                    onClick={() => r.push('/vaults')}
                  >
                    {'Start'}
                  </div>
                  {/* <div
                    className='h-full px-5 flex justify-center items-center rounded-[6px] border border-[#64738B]'
                    onClick={onPlay}
                  >
                    <div>{playIcon}</div>
                  </div> */}
                </div>
              </div>
            </QuestArea>
          </div>
          <div className='w-full flex justify-center items-center text-sm font-medium my-[40px] text-[#64738B]'>
            Stay tuned, more quests are on the way.
          </div>
        </div>
      )}
      {pageIndex === 2 && <InvitePage />}
    </div>
  )
}

function InvitePage() {
  const { inviteCodes } = useEarlyState()
  const staticCode = useMemo(() => {
    return inviteCodes.find((item) => item.permanent > 0)
  }, [inviteCodes])
  const onceCodes = useMemo(() => {
    if (staticCode) return [staticCode]
    return inviteCodes.filter((item) => item.permanent == 0).slice(0, 5)
  }, [inviteCodes, staticCode])
  const { address } = useAccount()
  const { value: items = [] } = useAsyncRetry(getInvitees, [address])

  const { copyTextToClipboard } = useCopy()
  const r = useRouter()
  const goMint = () => r.push('/vaults')
  const renderRow = (param: any) => {
    if (!items) return null
    const { index } = param
    const item = items[index]
    return (
      <div className='flex flex-1 justify-between text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[14px] mb-[30px]'>
        <div className='w-4/12'>{shortStr(item.address)}</div>
        <div className='w-4/12'>{formatNumber(item.total_point)}</div>
        <div className='w-4/12 text-right'>{fmtTime(item.invite_time)}</div>
      </div>
    )
  }

  // 得到邀请链接
  const inviteUrl = () => {
    return ''
  }
  const [ref, { width }] = useMeasure()

  return (
    <div className='flex-1 md:w-0'>
      <SectionTitle title='Invites' />
      <div className='my-4 md:mt-5 md:mb-[50px] text-[14px] leading-[14px] font-medium text-[#64748B] dark:text-slate-50/60'>
        You get +10% bonus points when invitees earn points
      </div>
      <SectionTitle className='mt-5' title='Referral Invite Link' />
      {!staticCode && (
        <div className='w-full relative h-[200px] md:h-[150px] p-4 md:p-6 bg-[#EDF2FF] text-indigo-500 dark:text-white dark:bg-s1  shadow-sm rounded-[16px]'>
          <div className='text-lg font-semibold leading-[24px] mt-[26px]'>
            Activation requires a minimum deposit of 2 ETH{' '}
          </div>
          <div
            className='cursor-pointer text-[14px] font-semibold leading-[14px] mt-[20px] flex items-center'
            onClick={goMint}
          >
            Deposit Now
            <div className='ml-[10px]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='17' height='8' viewBox='0 0 17 8'>
                <path
                  d='M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM1 4.5H16V3.5H1V4.5Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </div>
          <Image src='./gift.png' width={120} height={120} alt='gift' className='absolute right-[46px] bottom-0' />
          <Image src='./coin.png' width={60} height={60} alt='coin' className='absolute right-6 -bottom-4' />
        </div>
      )}
      {staticCode && (
        <div className='w-full flex flex-col md:flex-row justify-between gap-4'>
          <div className='flex-1 pl-[30px] text-indigo-500 dark:text-violet-300 text-[18px] p-4 bg-[#EDF2FF] border border-[#E4E4E7] rounded-[12px] flex items-center'>
            {inviteUrl()}
          </div>
          <div
            className='w-full md:w-fit text-[#FFFFFF] text-[18px] p-3 rounded-[12px] bg-[#64738B] flex items-center justify-center cursor-pointer'
            onClick={() => copyTextToClipboard(inviteUrl())}
          >
            COPY
          </div>
        </div>
      )}

      <SectionTitle className='mt-5' title={staticCode ? 'Invite code' : 'One-time invite code'} />
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 md:gap-6'>
        {onceCodes.map((item, index) => {
          return <InviteCodeBox code={item.code} avaliable={item.permanent > 0 || item.used == 0} key={index} />
        })}
      </div>
      <div className='py-[24px] h-auto mb-[20px] overflow-x-auto'>
        <div
          ref={ref as any}
          className='flex flex-1 justify-between text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[14px] mb-[30px] w-full min-w-[600px]'
        >
          <div className='w-4/12'>Invitees</div>
          <div className='w-4/12'>Points</div>
          <div className='w-4/12 text-right'>Date of Invitation</div>
        </div>
        <List
          width={Math.max(width, 600)}
          height={Math.min(50, items.length + 1) * 44}
          rowHeight={44}
          rowCount={items.length}
          rowRenderer={renderRow}
          autoHeight={true}
          className='no-scrollbar'
        />
      </div>
    </div>
  )
}

function InviteCodeBox({ code, avaliable }: { code: string; avaliable: boolean }) {
  const { copyTextToClipboard } = useCopy()
  const { reInviteCode } = useEarlyState()
  const [reBusy, setReBusy] = useState(false)
  const onClick = () => {
    if (avaliable) {
      copyTextToClipboard(code)
    } else if (!reBusy) {
      setReBusy(true)
      reInviteCode()
        .catch(handleError)
        .finally(() => setReBusy(false))
    }
  }
  const line = (
    <svg xmlns='http://www.w3.org/2000/svg' width='104' height='8' viewBox='0 0 104 8' fill='currentColor'>
      <path d='M10.7045 7.13761C11.1318 7.13761 11.4167 6.95955 11.4167 6.69246V0.445151C11.4167 0.17806 11.1318 0 10.7045 0C10.2771 0 9.99222 0.17806 9.99222 0.445151V6.69029C9.99222 6.95738 10.2771 7.13761 10.7045 7.13761ZM3.56815 7.13761H4.99611C5.42346 7.13761 5.70835 6.95955 5.70835 6.69246V0.445151C5.70835 0.17806 5.42346 0 4.99611 0H3.56815C3.14081 0 2.85591 0.17806 2.85591 0.445151V6.69029C2.85591 6.95738 3.14081 7.13761 3.56815 7.13761ZM7.84855 7.13761C8.2759 7.13761 8.56079 6.95955 8.56079 6.69246V0.445151C8.56079 0.17806 8.2759 0 7.84855 0C7.42121 0 7.13631 0.17806 7.13631 0.445151V6.69029C7.13631 6.95738 7.42121 7.13761 7.84855 7.13761ZM13.5604 7.13761H14.9883C15.4157 7.13761 15.7006 6.95955 15.7006 6.69246V0.445151C15.7006 0.17806 15.4157 0 14.9883 0H13.5604C13.133 0 12.8481 0.17806 12.8481 0.445151V6.69029C12.8447 6.95738 13.1296 7.13761 13.5604 7.13761ZM17.8408 0C17.4134 0 17.1285 0.17806 17.1285 0.445151V6.69029C17.1285 6.95738 17.4134 7.13544 17.8408 7.13544C18.2681 7.13544 18.553 6.95738 18.553 6.69029V0.445151C18.5565 0.17806 18.2681 0 17.8408 0ZM0.712241 7.13761C1.13959 7.13761 1.42448 6.95955 1.42448 6.69246V0.445151C1.42448 0.17806 1.13959 0 0.712241 0C0.284896 0 0 0.17806 0 0.445151V6.69029C0 6.95738 0.284896 7.13761 0.712241 7.13761Z' />
      <path d='M30.6896 7.13761C31.1169 7.13761 31.4018 6.95955 31.4018 6.69246V0.445151C31.4018 0.17806 31.1169 0 30.6896 0C30.2622 0 29.9773 0.17806 29.9773 0.445151V6.69029C29.9773 6.95738 30.2622 7.13761 30.6896 7.13761ZM23.5533 7.13761H24.9812C25.4086 7.13761 25.6935 6.95955 25.6935 6.69246V0.445151C25.6935 0.17806 25.4086 0 24.9812 0H23.5533C23.1259 0 22.841 0.17806 22.841 0.445151V6.69029C22.841 6.95738 23.1259 7.13761 23.5533 7.13761ZM27.8337 7.13761C28.261 7.13761 28.5459 6.95955 28.5459 6.69246V0.445151C28.5459 0.17806 28.261 0 27.8337 0C27.4063 0 27.1214 0.17806 27.1214 0.445151V6.69029C27.1214 6.95738 27.4063 7.13761 27.8337 7.13761ZM33.5455 7.13761H34.9734C35.4008 7.13761 35.6857 6.95955 35.6857 6.69246V0.445151C35.6857 0.17806 35.4008 0 34.9734 0H33.5455C33.1181 0 32.8332 0.17806 32.8332 0.445151V6.69029C32.8298 6.95738 33.1147 7.13761 33.5455 7.13761ZM37.8259 0C37.3985 0 37.1136 0.17806 37.1136 0.445151V6.69029C37.1136 6.95738 37.3985 7.13544 37.8259 7.13544C38.2532 7.13544 38.5381 6.95738 38.5381 6.69029V0.445151C38.5416 0.17806 38.2532 0 37.8259 0ZM20.6973 7.13761C21.1247 7.13761 21.4096 6.95955 21.4096 6.69246V0.445151C21.4096 0.17806 21.1247 0 20.6973 0C20.27 0 19.9851 0.17806 19.9851 0.445151V6.69029C19.9851 6.95738 20.27 7.13761 20.6973 7.13761Z' />
      <path d='M50.6752 7.13761C51.1025 7.13761 51.3874 6.95955 51.3874 6.69246V0.445151C51.3874 0.17806 51.1025 0 50.6752 0C50.2478 0 49.9629 0.17806 49.9629 0.445151V6.69029C49.9629 6.95738 50.2478 7.13761 50.6752 7.13761ZM43.5389 7.13761H44.9668C45.3942 7.13761 45.6791 6.95955 45.6791 6.69246V0.445151C45.6791 0.17806 45.3942 0 44.9668 0H43.5389C43.1115 0 42.8266 0.17806 42.8266 0.445151V6.69029C42.8266 6.95738 43.1115 7.13761 43.5389 7.13761ZM47.8193 7.13761C48.2466 7.13761 48.5315 6.95955 48.5315 6.69246V0.445151C48.5315 0.17806 48.2466 0 47.8193 0C47.3919 0 47.107 0.17806 47.107 0.445151V6.69029C47.107 6.95738 47.3919 7.13761 47.8193 7.13761ZM53.5311 7.13761H54.959C55.3864 7.13761 55.6713 6.95955 55.6713 6.69246V0.445151C55.6713 0.17806 55.3864 0 54.959 0H53.5311C53.1037 0 52.8188 0.17806 52.8188 0.445151V6.69029C52.8154 6.95738 53.1003 7.13761 53.5311 7.13761ZM57.8115 0C57.3841 0 57.0992 0.17806 57.0992 0.445151V6.69029C57.0992 6.95738 57.3841 7.13544 57.8115 7.13544C58.2388 7.13544 58.5237 6.95738 58.5237 6.69029V0.445151C58.5272 0.17806 58.2388 0 57.8115 0ZM40.6829 7.13761C41.1103 7.13761 41.3952 6.95955 41.3952 6.69246V0.445151C41.3952 0.17806 41.1103 0 40.6829 0C40.2556 0 39.9707 0.17806 39.9707 0.445151V6.69029C39.9707 6.95738 40.2556 7.13761 40.6829 7.13761Z' />
      <path d='M83.3029 7.13761C83.7302 7.13761 84.0151 6.95955 84.0151 6.69246V0.445151C84.0151 0.17806 83.7302 0 83.3029 0C82.8755 0 82.5906 0.17806 82.5906 0.445151V6.69029C82.5906 6.95738 82.8755 7.13761 83.3029 7.13761ZM76.1665 7.13761H77.5945C78.0218 7.13761 78.3067 6.95955 78.3067 6.69246V0.445151C78.3067 0.17806 78.0218 0 77.5945 0H76.1665C75.7392 0 75.4543 0.17806 75.4543 0.445151V6.69029C75.4543 6.95738 75.7392 7.13761 76.1665 7.13761ZM80.4469 7.13761C80.8743 7.13761 81.1592 6.95955 81.1592 6.69246V0.445151C81.1592 0.17806 80.8743 0 80.4469 0C80.0196 0 79.7347 0.17806 79.7347 0.445151V6.69029C79.7347 6.95738 80.0196 7.13761 80.4469 7.13761ZM86.1588 7.13761H87.5867C88.0141 7.13761 88.299 6.95955 88.299 6.69246V0.445151C88.299 0.17806 88.0141 0 87.5867 0H86.1588C85.7314 0 85.4465 0.17806 85.4465 0.445151V6.69029C85.443 6.95738 85.7279 7.13761 86.1588 7.13761ZM90.4392 0C90.0118 0 89.7269 0.17806 89.7269 0.445151V6.69029C89.7269 6.95738 90.0118 7.13544 90.4392 7.13544C90.8665 7.13544 91.1514 6.95738 91.1514 6.69029V0.445151C91.1549 0.17806 90.8665 0 90.4392 0ZM73.3106 7.13761C73.738 7.13761 74.0229 6.95955 74.0229 6.69246V0.445151C74.0229 0.17806 73.738 0 73.3106 0C72.8833 0 72.5984 0.17806 72.5984 0.445151V6.69029C72.5984 6.95738 72.8833 7.13761 73.3106 7.13761Z' />
      <path d='M70.6603 7.13761C71.0876 7.13761 71.3725 6.95955 71.3725 6.69246V0.445151C71.3725 0.17806 71.0876 0 70.6603 0C70.2329 0 69.948 0.17806 69.948 0.445151V6.69029C69.948 6.95738 70.2329 7.13761 70.6603 7.13761ZM63.524 7.13761H64.9519C65.3793 7.13761 65.6642 6.95955 65.6642 6.69246V0.445151C65.6642 0.17806 65.3793 0 64.9519 0H63.524C63.0966 0 62.8117 0.17806 62.8117 0.445151V6.69029C62.8117 6.95738 63.0966 7.13761 63.524 7.13761ZM67.8044 7.13761C68.2317 7.13761 68.5166 6.95955 68.5166 6.69246V0.445151C68.5166 0.17806 68.2317 0 67.8044 0C67.377 0 67.0921 0.17806 67.0921 0.445151V6.69029C67.0921 6.95738 67.377 7.13761 67.8044 7.13761ZM60.6681 7.13761C61.0954 7.13761 61.3803 6.95955 61.3803 6.69246V0.445151C61.3803 0.17806 61.0954 0 60.6681 0C60.2407 0 59.9558 0.17806 59.9558 0.445151V6.69029C59.9558 6.95738 60.2407 7.13761 60.6681 7.13761Z' />
      <path d='M103.287 7.13761C103.715 7.13761 104 6.95955 104 6.69246V0.445151C104 0.17806 103.715 0 103.287 0C102.86 0 102.575 0.17806 102.575 0.445151V6.69029C102.575 6.95738 102.86 7.13761 103.287 7.13761ZM96.1512 7.13761H97.5791C98.0065 7.13761 98.2914 6.95955 98.2914 6.69246V0.445151C98.2914 0.17806 98.0065 0 97.5791 0H96.1512C95.7238 0 95.4389 0.17806 95.4389 0.445151V6.69029C95.4389 6.95738 95.7238 7.13761 96.1512 7.13761ZM100.432 7.13761C100.859 7.13761 101.144 6.95955 101.144 6.69246V0.445151C101.144 0.17806 100.859 0 100.432 0C100.004 0 99.7193 0.17806 99.7193 0.445151V6.69029C99.7193 6.95738 100.004 7.13761 100.432 7.13761ZM93.2952 7.13761C93.7226 7.13761 94.0075 6.95955 94.0075 6.69246V0.445151C94.0075 0.17806 93.7226 0 93.2952 0C92.8679 0 92.583 0.17806 92.583 0.445151V6.69029C92.583 6.95738 92.8679 7.13761 93.2952 7.13761Z' />
    </svg>
  )
  return (
    <div className='h-[242px] '>
      <div
        className={cn(
          'w-full relative h-[182px] mb-[20px] rounded-[10px] border-[1px] border-indigo-500 bg-indigo-500 dark:bg-s2 dark:border-violet-300',
          {
            'opacity-50': !avaliable,
          },
        )}
      >
        <div className='w-full h-[182px] flex flex-col justify-center items-center text-white dark:text-black'>
          <div className='relative'>
            <div className={cn('text-[32px] leading-[32px] font-semibold relative bottom-[15px] ')}>{code}</div>
          </div>
          <div>{line}</div>
        </div>
        <div className='w-full absolute bottom-0 h-[42px] bg-white dark:bg-slate-950 flex justify-center items-center font-medium text-[12px] leading-[12px] rounded-b-[10px]'>
          <span className={avaliable ? '#6466F1' : '#64748B'}></span>
          {avaliable ? 'Avaliable' : 'Used'}
        </div>
      </div>
      <div
        className={cn(
          'w-full flex justify-center items-center h-[40px] rounded-[6px] bg-[#64738B] dark:bg-violet-300 text-white dark:text-black font-medium text-[14px] leading-[14px] cursor-pointer',
        )}
        onClick={onClick}
      >
        {reBusy && <Spinner />}
        {avaliable ? 'Copy' : 'Refresh'}
      </div>
    </div>
  )
}

function QuestArea({ name, checked, children }: { name: string; checked: boolean; children: ReactElement }) {
  const isDark = useThemeState((t) => t.theme == 'dark')
  const checkedSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <g clipPath='url(#clip0_1_648)'>
        <path d='M0 0H25.6C29.12 0 32 2.88 32 6.4V32C14.4 32 0 17.6 0 0Z' fill={isDark ? '#c4b5fd' : '#6466F1'} />
        <path
          d='M16.8 15.84L24 8.8C24.48 8.32 25.28 8.32 25.76 8.8C26.24 9.28 26.24 10.08 25.76 10.56L17.76 18.56C17.28 19.04 16.48 19.04 16 18.56L12 14.4C11.52 13.92 11.52 13.28 12 12.8C12.48 12.32 13.28 12.32 13.76 12.8L16.8 15.84Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_648'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
  const unCheckedSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <g opacity='0.3' clipPath='url(#clip0_1_691)'>
        <path d='M0 0H25.6C29.12 0 32 2.88 32 6.4V32C14.4 32 0 17.6 0 0Z' fill='#64738B' />
        <path
          d='M16.8 15.84L24 8.8C24.48 8.32 25.28 8.32 25.76 8.8C26.24 9.28 26.24 10.08 25.76 10.56L17.76 18.56C17.28 19.04 16.48 19.04 16 18.56L12 14.4C11.52 13.92 11.52 13.28 12 12.8C12.48 12.32 13.28 12.32 13.76 12.8L16.8 15.84Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_691'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
  return (
    <div className='relative p-6 pt-[54px] bg-white w-max-[537px] h-[296px] shadow-sm border border-[#E4E4E7] dark:border-zinc-600 dark:bg-transparent rounded-[16px]'>
      <div className='absolute top-0 left-0 w-[100px] h-[30px] md:h-[36px] rounded-tl-[16px] rounded-br-[16px] border-indigo-500 border-[1px] text-base md:text-lg text-indigo-500 dark:text-violet-300 dark:border-violet-300 font-semibold leading-[18px] flex justify-center items-center'>
        {name}
      </div>
      <div className='absolute top-0 right-0 '>{checked ? checkedSvg : unCheckedSvg}</div>
      <div className='absolute top-2 right-10 text-xs md:text-sm font-[500] text-[#000000]'>Updates every 24 hours</div>
      {children}
    </div>
  )
}
