import { Address } from 'viem'
import api from '../../utils/api'

export const getRank = async () => {
  const result = await api.get<{ address: string; total_point: string }[]>('/common/leader')
  return result
}

export const userLogin = async (code: string) => {
  const result = await api.post<{ userId: string }>('/auth/register', { code })
  return result
}

export const getUserState = async () => {
  const result = await api.get<{
    tvl: string
    fromInvitees: string
    totalPoint: string
    boostPercent: number
    rank: number
    blastEarly: number
    glaxe: number
    minted: number
  }>('/auth/userState')
  return result
}

export const getBlastPoints = async () => {
  const result = await api.get<{
    totalBlastPoint: string
    sumUserTvl: string
    userTvl: string
    distributionHistory: string
  }>('/auth/blastPoints')
  return result
}

export const getInviteCodes = async () => {
  const result = await api.get<
    {
      permanent: number // 0: once , 1: infinity
      code: string
      used: number
    }[]
  >('/auth/invite/codes')
  return result
}

export const getInvitees = async () => {
  const result = await api.get<{ address: string; invite_time: string; total_point: string }[]>('/auth/invitees')
  return result
}

export const refreshInviteCode = async () => {
  await api.post('/auth/invite/code/create')
  return getInviteCodes()
}

export const getPtypoolYields = async () => {
  const result = await api.get<{
    [k: Address]: {
      staking: {
        yields: string
        blocks: string
        
      }
      matching: {
        yields: string
        blocks: string
      }
    }
  }>('/common/ptypool/yields')
  return result
}
