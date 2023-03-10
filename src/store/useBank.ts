import { create } from 'zustand'

type Bank = {
  bankNumber: number
  setBank: (value: number) => void
}

export const useBank = create<Bank>((set) => ({
  bankNumber: 0,
  setBank: (value) => set({ bankNumber: value })
}))
