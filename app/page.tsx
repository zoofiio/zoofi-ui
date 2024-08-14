'use client'

import { CoinIcon } from '@/components/coinicon'
import { USB_ADDRESS, USBSymbol, VAULTS_CONFIG } from '@/config/swap'
import { useCurrentChainId } from '@/hooks/useCurrentChainId'
import { useTVL, useTVLV1 } from '@/hooks/useTVL'
import { useTokenApys } from '@/hooks/useTokenApys'
import { fmtPercent } from '@/lib/utils'
import { displayBalance } from '@/utils/display'
import Image from 'next/image'
import { FiDollarSign } from 'react-icons/fi'

export default function Home() {
  const chainId = useCurrentChainId()
  const { tvl } = useTVL()
  const tvlV1 = useTVLV1()
  const tapys = useTokenApys()
  const vcs = VAULTS_CONFIG[chainId]
  const usdbVc = vcs.find((item) => item.assetTokenSymbol == 'USDB')

  return (
    <div className='flex max-w-screen-xl mx-auto px-4 flex-col h-[calc(100vh-100px)] items-center pb-8'>
      <h1 className='flex md:px-8 text-[min(6vw,1.875rem)] font-extrabold text-slate-700 dark:text-slate-50 text-center'>
        <svg
          className='mr-2 animate-bounce self-end shrink-0'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 0C9.37146 3.70633 12.2937 6.62854 16 8C12.2937 9.37146 9.37146 12.2937 8 16C6.62854 12.2937 3.70633 9.37146 0 8C3.70633 6.62854 6.62854 3.70633 8 0Z'
            fill='#10B981'
          />
        </svg>
        A Structured Protocol for
        <br /> Better Asset Utilization
        <svg
          className='ml-2 animate-bounce shrink-0'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 0C9.37146 3.70633 12.2937 6.62854 16 8C12.2937 9.37146 9.37146 12.2937 8 16C6.62854 12.2937 3.70633 9.37146 0 8C3.70633 6.62854 6.62854 3.70633 8 0Z'
            fill='#6366F1'
          />
        </svg>
      </h1>

      <div className='relative flex-1 w-full mt-6 flex flex-col sm:flex-row gap-2 text-2xl rounded-2xl text-white'>
        <img
          src={'./balance.png'}
          style={{ aspectRatio: '524/600' }}
          className='object-fill w-full h-auto max-w-[270px] md:max-w-[350px] absolute z-10 top-[44%] md:top-1/2 right-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />

        <div className='min-h-[240px] md:min-h-[400px] relative bg-emerald-500 overflow-hidden flex-1 p-4 md:pt-10 md:px-7 rounded-xl'>
          <div className='p-2 bg-white rounded-2xl w-fit'>
            <CoinIcon symbol={USBSymbol} size={48} />
          </div>
          <h3 className='font-bold text-2xl mt-3 lg:text-2xl'>${USBSymbol}</h3>
          <div className='text-sm lg:text-lg relative z-20'>Interest-bearing stable asset</div>
          <div className='font-semibold text-sm lg:text-lg relative z-20'>
            APY:({fmtPercent(tapys[USB_ADDRESS[chainId]], 10, 2)}~{fmtPercent(tapys['USB_END'], 10, 2)})
          </div>
          <div
            className='w-96 h-96 absolute -right-16 -bottom-24 rounded-full bg-white/30 text-white flex items-center justify-center'
            style={{ transform: 'rotateX(60deg) rotateY(0deg) rotateZ(-45deg)', fontSize: 128 }}
          >
            <FiDollarSign className='w-72 h-72 opacity-30' />
          </div>
        </div>
        <div className='min-h-[480px] relative overflow-hidden bg-indigo-500 text-right justify-end items-end flex flex-col flex-1 p-4 md:pb-10 md:px-7 rounded-xl'>
          {/* <div className='p-2 bg-white rounded-2xl w-fit flex gap-1 z-50'>
            <CoinIcon symbol={'USDBx'} size={48} />
          </div>
          <span className='font-bold text-lg mt-3 lg:text-2xl relative z-10'>$USDBx</span>
          <div className='text-sm lg:text-lg'>Blast native yield booster</div>
          <div className='mb-4 font-semibold text-sm lg:text-lg'>
            APY:{fmtPercent(tapys[usdbVc?.xTokenAddress as any], 10, 2)}
          </div>
          <div className='p-2 bg-white rounded-2xl w-fit flex gap-1 z-50'>
            <CoinIcon symbol={'ETHx'} size={48} />
          </div>
          <span className='font-bold text-lg mt-3 lg:text-2xl relative z-10'>$ETHx</span>
          <div className='text-sm lg:text-lg'>Leveraged long on ETH</div> */}

          <div
            className='grid grid-cols-2 gap-12 absolute -right-16 -top-48 rounded-full items-center justify-center'
            style={{ transform: 'rotateX(60deg) rotateY(0deg) rotateZ(-45deg)' }}
          >
            <Image
              width={384}
              height={384}
              src='./ETH.svg'
              alt='ETH'
              className='relative left-1/4 grayscale mix-blend-luminosity opacity-20 col-span-2'
            />
            <Image
              width={384}
              height={384}
              src='./WBTC.svg'
              alt='WBTC'
              className='mix-blend-luminosity opacity-20 grayscale'
            />
            <Image
              width={384}
              height={384}
              src='./stETH.svg'
              alt='WBTC'
              className='mix-blend-luminosity opacity-20 grayscale'
            />
          </div>
        </div>
      </div>
      <div className='w-full px-4 pb-8 md:pt-8 text-3xl font-extrabold text-slate-700 dark:text-slate-50'>
        <span className='text-lg whitespace-nowrap'>Total Value Locked:</span> ${displayBalance(tvl + tvlV1)}
      </div>
    </div>
  )
}
