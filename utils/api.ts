import { DomainRef } from '@/hooks/useConfigDomain'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

let api: AxiosInstance

const instance = () => {
  if (!api || api.defaults.baseURL !== `https://earlyaccess-beta.${DomainRef.value}/api`) {
    api = axios.create({
      // baseURL: 'http://127.0.0.1:3001/api/',
      baseURL: `https://earlyaccess-beta.${DomainRef.value}/api`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return api
}

export type Res<T> = {
  code: number
  message: string
  data: T
}

// instance.interceptors.request.use(
//   (config) => {
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// instance.interceptors.response.use(
//   (response) => {
//     return response.data
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

export async function get<T>(url: `/${string}`, params: any = {}, config: AxiosRequestConfig = {}) {
  if (url.startsWith('/auth')) {
    const token = localStorage.getItem('earlyaccess-token')
    if (!token) throw 'Need token'
    config.headers = { ...(config.headers || {}), Authorization: token }
  }
  const res = await instance().get<Res<T>>(url, {
    ...config,
    params: params,
  })
  console.info('res:', res?.data)
  if (res?.data?.code !== 200) throw res.data
  return res.data.data
}

export async function post<T>(url: `/${string}`, data: any = {}, config: AxiosRequestConfig = {}) {
  if (url.startsWith('/auth')) {
    const token = localStorage.getItem('earlyaccess-token')
    if (!token) throw 'Need token'
    config.headers = { ...(config.headers || {}), Authorization: token }
  }
  const res = await instance().post<Res<T>>(url, data, config)
  if (res?.data?.code !== 200) throw res.data
  return res.data.data
}

// export function put(url: string, data: any) {
//   return instance.put(url, data);
// }

export default {
  get,
  post,
  // put,
}
