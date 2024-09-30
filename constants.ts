import { DomainRef } from './hooks/useConfigDomain'

const TWITTER_LINK = 'https://x.com/ZooFinanceIO'
const DISCORD_LINK = 'https://t.co/RJwdwdawe5'

const DECIMAL = BigInt(1e18)
const DECIMAL_PRICE = BigInt(1e8)
const YEAR_SECONDS = BigInt('31536000')

const Day1 = 24 * 60 * 60 * 1000

const DOC_LINK = () => `https://docs.${DomainRef.value}`

const ENV: 'prod' | 'test' | 'beta' = (process.env.NEXT_PUBLIC_ENV as any) || 'prod'

const isTEST = ENV == 'test'
const isBETA = ENV == 'beta'
const isPROD = !ENV
const isLOCL = process.env.NODE_ENV == 'development'
console.info(process.env.NODE_ENV)
export { TWITTER_LINK, DISCORD_LINK, DOC_LINK, DECIMAL, DECIMAL_PRICE, Day1, ENV, isTEST, isBETA, isPROD, isLOCL, YEAR_SECONDS }
