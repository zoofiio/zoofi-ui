import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatUnits, parseUnits, parseEther as _parseEther, etherUnits, Address } from 'viem'
import _, { get } from 'lodash'
import { toast } from 'sonner'
import { NATIVE_TOKEN_ADDRESS } from '@/config/swap'
import dayjs from 'dayjs'

export type UnwrapPromise<T> = T extends Promise<infer S> ? S : T
export type UnPromise<T> = T extends () => Promise<infer U> ? U : UnwrapPromise<T>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getErrorMsg(error: any) {
  // msg
  let msg = 'Unkown'
  if (typeof error == 'string') msg = error
  else if (typeof error?.msg == 'string') msg = error?.msg
  else if (typeof error?.message == 'string') msg = error?.message
  // replace
  if (msg.includes('User denied') || msg.includes('user rejected transaction')) return 'You declined the action in your wallet.'
  if (msg.includes('transaction failed')) return 'Transaction failed'
  return msg
}

export function handleError(error: any) {
  toast.error(getErrorMsg(error))
}

let poIndex = 0
export function genPromiseObj<T = void>() {
  let resolve: (v: T) => void = () => {}
  const promise = new Promise<T>((_resolve) => {
    resolve = _resolve
  })
  poIndex++
  return { promise, resolve, id: poIndex }
}
export function sleep(time: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, time))
}

export function aarToNumber(aar: bigint, decimals: bigint | number) {
  const maar = typeof aar == 'bigint' ? aar : 0n
  const _aar = formatUnits(maar, typeof decimals == 'bigint' ? parseInt(decimals.toString()) : decimals)
  return parseFloat(_aar)
}

export function fmtAAR(aar: bigint, decimals: bigint | number) {
  const aarPercent = aarToNumber(aar, decimals) * 100
  if (aarPercent > 999999999) return '>999999999%'
  return aarPercent.toFixed() + '%'
}

export function parseEthers(num: string, unit?: Parameters<typeof _parseEther>[1] | number) {
  if (!num) num = '0'
  num = num.replaceAll(',', '')
  const decimal = typeof unit == 'number' ? unit : etherUnits[unit || 'wei']
  return parseUnits(num, decimal)
}

export function fmtPercent(percent: bigint, decimals: number | bigint, showDecimals: number = 2) {
  const _decimals = typeof decimals == 'bigint' ? parseInt(decimals.toString()) : decimals
  const _percent = formatUnits(percent * 100n, _decimals)
  return parseFloat(_percent.replaceAll(',', '')).toFixed(showDecimals) + '%'
}

export function getBigint(result: any, path: string | (string | number)[], def: bigint = 0n) {
  const data = get(result, path, def)
  if (typeof data == 'bigint') return data
  if (typeof data == 'number') return BigInt(data)
  return def
}

// if result < min will return def else return result - min
export function getBigintGt(result: any, path: string | (string | number)[], def: bigint = 0n, min: bigint = 1n) {
  const data = getBigint(result, path, def)
  return data >= min ? data - min : def
}

export function bnMin(bns: bigint[]): bigint {
  if (bns.length <= 0) return 0n
  return bns.reduce((min, item) => (item < min ? item : min), bns[0])
}

export function swapThrusterLink(token: Address, token2: Address) {
  if (token == NATIVE_TOKEN_ADDRESS) token = '0x0000000000000000000000000000000000000000'
  return `https://app.thruster.finance/?token1=${token}&token2=${token2}`
}

export function proxyGetDef<T extends object>(obj: Partial<T>, def: any | ((k: string) => any)) {
  const get = function (target: T, p: string) {
    const hasValue = p in target
    if (hasValue && (target as any)[p] !== null && (target as any)[p] !== undefined) {
      return (target as any)[p]
    }
    return typeof def == 'function' ? def(p) : def
  }
  return new Proxy(obj, { get }) as T
}

export function tryParse<T>(data: any, def: T) {
  try {
    return (JSON.parse(data) || def) as T
  } catch (error) {
    return def
  }
}

export const shortStr = (v?: string, count = 6, endCount = 5) => {
  if (!v) return ''
  if (v.length <= count + endCount) return v
  return `${v.toString().substring(0, count)}...${v.toString().substring(v.length - endCount)}`
}

export const FMT = {
  DEF: 'YYYY/MM/DD',
  DATE: 'DD/MM/YYYY',
  DATE2: 'D MMM YYYY',
  ALL: 'YYYY/MM/DD HH:mm:ss',
  ALL2: 'YYYY/MM/DD hh:mm A',
} as const

export const fmtDate = (time: number | string | bigint | Date, fmt: string = FMT.DEF) => {
  const mtime = typeof time == 'bigint' ? parseInt(time.toString()) : time
  return dayjs(mtime).format(fmt)
}

// 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'
const FMT_DURATION_TYPES = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'] as const
type FMT_DURATION_TYPE = (typeof FMT_DURATION_TYPES)[number]
export const fmtDuration = (duration: number | bigint, type: FMT_DURATION_TYPE | 'auto' = 'auto') => {
  let durationBn = typeof duration == 'number' ? BigInt(duration) : duration
  durationBn < 0n && (durationBn = 0n)
  const divVauleMap: { [k in FMT_DURATION_TYPE]: bigint } = {
    seconds: 1000n,
    minutes: 1000n * 60n,
    hours: 1000n * 60n * 60n,
    days: 1000n * 60n * 60n * 24n,
    // weeks: 1000n * 60n * 60n * 24n * 7n,
    months: 1000n * 60n * 60n * 24n * 7n * 30n,
    years: 1000n * 60n * 60n * 24n * 365n,
  }
  let fType: FMT_DURATION_TYPE
  if (type == 'auto') {
    const item = FMT_DURATION_TYPES.findLast((k) => divVauleMap[k] < durationBn)
    fType = item || FMT_DURATION_TYPES[0]
  } else {
    fType = type
  }
  return `${(durationBn / divVauleMap[fType]).toString()} ${fType}`
}

export const decimalBn = (decimals: bigint | number = 10n) => 10n ** BigInt(decimals || 10n)

// src * multip
export const multipBn = (src: bigint, multip: bigint, multipDecimal?: bigint | number) => (src * multip) / decimalBn(multipDecimal || 10n)
// src * (1 - multip)
export const multipOtherBn = (src: bigint, multip: bigint, multipDecimal?: bigint | number) =>
  decimalBn(multipDecimal || 10n) - multip > 0n ? (src * (decimalBn(multipDecimal || 10n) - multip)) / decimalBn(multipDecimal || 10n) : 0n
// src / multip
export const divMultipBn = (src: bigint, multip: bigint, multipDecimal?: bigint | number) => (multip > 0n ? (src * decimalBn(multipDecimal || 10n)) / multip : 0n)
// src / (1 - multip)
export const divMultipOtherBn = (src: bigint, multip: bigint, multipDecimal?: bigint | number) =>
  decimalBn(multipDecimal || 10n) - multip > 0n ? (src * decimalBn(multipDecimal || 10n)) / (decimalBn(multipDecimal || 10n) - multip) : 0n

export const fmtBn = (bn: bigint, decimals: bigint | number = 18, autoDecimals?: boolean) => {
  const res = formatUnits(bn, typeof decimals == 'bigint' ? parseInt(decimals.toString()) : decimals)
  if (!autoDecimals) return res
  if (res.includes('.')) {
    const [l, r] = res.split('.')
    if (r.length > 3) {
      let end = ''
      if (l == '0') {
        const trim0 = _.trimStart(r, '0')
        const trimd0Count = r.length - trim0.length
        const sliced = _.trimEnd(trim0.slice(0, 3), '0')
        end = '.' + sliced.padStart(trimd0Count + sliced.length, '0')
      } else {
        const trim0 = _.trimEnd(r.slice(0, 3), '0')
        trim0 && (end = `.${trim0}`)
      }
      return `${l}${end}`
    }
  }
  return res
}

export async function retry<T>(fn: () => Promise<T>, count: number = 3, wait: number = 2000) {
  let mCount = count
  while (true) {
    try {
      return await fn()
    } catch (error) {
      if (mCount <= 0) {
        throw error
      } else {
        // console.error('retry:error', mCount, error)
        mCount--
        await sleep(wait)
      }
    }
  }
}
