import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useBank } from 'store/useBank'
import { getBanks } from 'services/BrazilService'

function Home() {
  const { data } = useQuery(['banks'], async () => await getBanks())

  const { bankNumber, setBank } = useBank()

  const chooseBank = (e: any) => {
    setBank(e.target.value)
  }

  return (
    <div className='App'>
      <select
        className='select select-primary w-full max-w-xs'
        value={bankNumber}
        onChange={chooseBank}
      >
        <option value='Choose a Bank'>Choose a Bank</option>
        {data &&
          data.map(
            ({ name, code }: { name: any; code: number }, key: string) => (
              <option
                key={key}
                value={code}
              >
                {name}
              </option>
            )
          )}
      </select>
    </div>
  )
}

export default Home
