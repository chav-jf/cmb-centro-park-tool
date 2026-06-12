export interface AlliedBrand {
  id: 'andreani' | 'session' | 'nd-tuned'
  name: string
  tagline: string
  logo: string
  /** Color de fondo del PNG (la placa usa este color para fundir el fondo del logo). */
  plate: string
  catalogUrl: string
  highlight: boolean
}

export const alliedBrands: AlliedBrand[] = [
  {
    id: 'andreani',
    name: 'Andreani',
    tagline: 'Suspensiones & componentes',
    logo: '/gallery/andreani_logo.png',
    plate: '#ffffff',
    catalogUrl: 'https://drive.google.com/file/d/1Dyfz5Qpj5VZmLtrKBajJL1WrNlV8TEMT/view',
    highlight: false,
  },
  {
    id: 'session',
    name: 'Session',
    tagline: 'We make you faster',
    logo: '/gallery/session_logo.png',
    plate: '#282827',
    catalogUrl: 'https://drive.google.com/file/d/1EJWnELg1hEAwKVre4aKqltVNZ0SuKkZK/view',
    highlight: false,
  },
  {
    id: 'nd-tuned',
    name: 'ND Tuned',
    tagline: 'Distribuidor oficial Colombia',
    logo: '/gallery/ND_logo.png',
    plate: '#171a1d',
    catalogUrl: 'https://drive.google.com/file/d/1D29T4-P2oxQcB4xekvIdbAl8WLvgwvpu/view',
    highlight: true,
  },
]
