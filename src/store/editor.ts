import { atom, map } from 'nanostores'

export interface Files {
  [key: string]: string
}

export const files = map<Files>({})
export const active = atom<string | null>(null)
