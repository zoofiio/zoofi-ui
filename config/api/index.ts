import { Address } from 'viem'
import api from '../../utils/api'

export const getBvaultEpochYtPrices = (vault: Address, epochId: bigint) => api.get<{ price: string; time: number }[]>(`/api/bvault/getEpochYTPrices/${vault}/${epochId}`)
