import { tabToSearchParams } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Address } from 'viem'

export function toBVault(r: ReturnType<typeof useRouter>, vault?: Address, tab?: string, subTab?: string) {
  if (!vault) return r.push('/b-vaults')
  let path = `/b-vaults?vault=${vault}`
  tab && (path += `&tab=${tabToSearchParams(tab)}`)
  subTab && (path += `&subtab=${tabToSearchParams(subTab)}`)
  r.push(path)
}

export function toLVault(r: ReturnType<typeof useRouter>, vault?: Address, tab?: string) {
  if (!vault) return r.push('/l-vaults')
  let path = `/l-vaults?vault=${vault}`
  tab && (path += `&tab=${tabToSearchParams(tab)}`)
  r.push(path)
}
