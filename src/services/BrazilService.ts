import axios from 'axios'

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
  const response = await apiClient.get(`/banks/v1/${id}'`)
  return response.data
}
