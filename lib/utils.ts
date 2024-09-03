import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatUnits, parseUnits, parseEther as _parseEther, etherUnits, Address } from 'viem'
import { get } from 'lodash'
import { toast } from 'sonner'
import { NATIVE_TOKEN_ADDRESS } from '@/config/swap'

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
  if (msg.includes('User denied') || msg.includes('user rejected transaction'))
    return 'You declined the action in your wallet.'
  if (msg.includes('transaction failed')) return 'Transaction failed'
  return msg
}

export function handleError(error: any) {
  toast.error(getErrorMsg(error))
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

export function proxyGetDef<T extends object>(obj: T, def: any | ((k: string) => any)) {
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

export const fmtTime = (time: number | string) => {
  const date = new Date(typeof time == 'number' ? time : time + ' UTC')
  return date.toLocaleDateString().replaceAll('/', '-') + ' ' + date.toLocaleTimeString()
}
