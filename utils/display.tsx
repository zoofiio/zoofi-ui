import { formatEther, formatUnits } from 'viem'

export const ellipseAddress = (address: string | null | undefined, width = 4): string => {
  if (!address) {
    return ''
  }

  if (width === -1) {
    return address
  }

  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export const displayBalanceWithUnit = (balance: bigint | undefined, toFixed: number = 3, unit: number): string => {
  if (!balance) return '0'
  const N = 10 ** toFixed
  const value = Math.floor(Number(formatUnits(balance, unit)) * N) / N
  const minFixed = Number((0.1 ** toFixed).toFixed(toFixed))
  if (value > 0 && value < minFixed) {
    return '<' + minFixed
  }
  if (value < 0 && value > -minFixed) {
    return '≈0'
  }
  return value.toLocaleString('en-US', {
    maximumFractionDigits: toFixed,
    // minimumFractionDigits: toFixed,
  })
  // return Number(formatEther(balance)).toLocaleString('en-US', {
  //   maximumFractionDigits: 3,
  // })
}

export const displayBalance = (
  balance: bigint | undefined,
  toFixed: number = 3,
  opts: Intl.NumberFormatOptions = {},
): string => {
  if (!balance) return '0'
  const value = Number(formatEther(balance))
  const minFixed = Number((0.1 ** toFixed).toFixed(toFixed))
  if (value > 0 && value < minFixed) {
    return '<' + minFixed
  }
  if (value < 0 && value > -minFixed) {
    return '≈0'
  }

  return value.toLocaleString('en-US', {
    ...(opts || {}),
    maximumFractionDigits: toFixed,
    // minimumFractionDigits: toFixed,
  })
  // return Number(formatEther(balance)).toLocaleString('en-US', {
  //   maximumFractionDigits: 3,
  // })
}

export const displayBalanceWithoutFormat = (balance: bigint | undefined, toFixed: number = 3): string => {
  if (!balance) return '0'
  const N = 10 ** toFixed
  const value = Math.floor(Number(formatEther(balance)) * N) / N
  const minFixed = Number((0.1 ** toFixed).toFixed(toFixed))
  if (value > 0 && value < minFixed) {
    return '<' + minFixed
  }
  if (value < 0 && value > -minFixed) {
    return '≈0'
  }
  return String(value)
}
