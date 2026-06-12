export interface AlliedBrand {
  id: 'andreani' | 'session' | 'nd-tuned'
  name: string
  tagline: string
  catalogUrl: string
  highlight: boolean
}

export const alliedBrands: AlliedBrand[] = [
  {
    id: 'andreani',
    name: 'Andreani',
    tagline: 'Suspensiones & componentes',
    catalogUrl: 'https://drive.google.com/file/d/1Dyfz5Qpj5VZmLtrKBajJL1WrNlV8TEMT/view',
    highlight: false,
  },
  {
    id: 'session',
    name: 'Session',
    tagline: 'We make you faster',
    catalogUrl: 'https://drive.google.com/file/d/1EJWnELg1hEAwKVre4aKqltVNZ0SuKkZK/view',
    highlight: false,
  },
  {
    id: 'nd-tuned',
    name: 'ND Tuned',
    tagline: 'Distribuidor oficial Colombia',
    catalogUrl: 'https://drive.google.com/file/d/1D29T4-P2oxQcB4xekvIdbAl8WLvgwvpu/view',
    highlight: true,
  },
]
