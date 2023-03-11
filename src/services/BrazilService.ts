import axios from 'axios'

import { QueryKey } from '@tanstack/react-query'

export type RQQueryKey = { queryKey: QueryKey }

const apiClient = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
  headers: {
    'Content-type': 'application/json'
  }
})

export const getBanks = async () => {
  const response = await apiClient.get('/banks/v1')
  return response.data
}

export const findBank = async (id: number) => {
  const response = await apiClient.get(`/banks/v1/${id}`)
  return response.data
}

export const findBankByIdHandler = async ({ queryKey }: RQQueryKey) => {
  const [_, id] = queryKey

  const { data } = await apiClient.get(`/banks/v1/${id}`)

  return data
}
