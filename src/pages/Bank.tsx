import { useBank } from 'store/useBank'
import { useQuery } from '@tanstack/react-query'

import { findBankByIdHandler } from 'services/BrazilService'

export function Bank() {
  const bankNumber = useBank((b) => b.bankNumber)

  const { data } = useQuery(['bank_id', bankNumber], findBankByIdHandler)

  console.log(data, '/bank')

  return <p>Token: {(data && data.name) ?? 'ID não carregado'}</p>
}
