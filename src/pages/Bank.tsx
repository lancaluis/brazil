import { useQuery } from '@tanstack/react-query'
import { useBank } from 'store/useBank'

import { findBank } from 'services/BrazilService'

export function Bank() {
  const bankNumber = useBank((b) => b.bankNumber)
  const { data } = useQuery(['bank id'], async () => await findBank(bankNumber))

  console.log(data, '/bank')

  return <p>Token: {(data && data.name) ?? 'ID não carregado'}</p>
}
