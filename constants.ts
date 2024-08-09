import { DomainRef } from './hooks/useConfigDomain'

const TWITTER_LINK = 'https://twitter.com/WandProtocol'
const DISCORD_LINK = 'https://discord.gg/fy6A7JCE5N'

const DECIMAL = BigInt(1e18)

const Day1 = 24 * 60 * 60 * 1000

const DOC_LINK = () => `https://docs.${DomainRef.value}`

export { TWITTER_LINK, DISCORD_LINK, DOC_LINK, DECIMAL, Day1 }
