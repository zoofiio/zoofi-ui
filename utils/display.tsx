import { formatUnits } from 'viem'

export const ellipseAddress = (address: string | null | undefined, width = 4): string => {
  if (!address) {
    return ''
  }

  if (width === -1) {
    return address
  }

  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export const displayBalance = (balance: bigint | undefined, toFixed: number = 3, unit: number = 18): string => {
  if (!balance) return '0'

  const fmtNumber = (num: number) =>
    num.toLocaleString('en-US', {
      maximumFractionDigits: toFixed,
    })

  const value = Number(formatUnits(balance, unit))
  const minFixed = Number((0.1 ** toFixed).toFixed(toFixed))
  if (value > 0 && value < minFixed) {
    if (value < 0.001 && value > 0.000001) {
      return fmtNumber(value * 1e6) + 'μ'
    }
    if (value < 0.000001 && value > 0.000000001) {
      return fmtNumber(value * 1e9) + 'n'
    }
    if (value < 0.000000001 && value > 0.000000000001) {
      return fmtNumber(value * 1e12) + 'p'
    }
    return '<' + minFixed
  }
  if (value < 0 && value > -minFixed) {
    if (value > -0.001 && value < 0.000001) {
      return fmtNumber(value * 1e6) + 'μ'
    }
    return '≈0'
  }
  return fmtNumber(value)
}
