export interface Brand {
  name: string
  role: string
  highlight: boolean
}

export const brands: Brand[] = [
  { name: 'ND TUNED', role: 'Distribuidor Oficial Colombia', highlight: true },
  { name: 'PARK TOOL', role: 'Herramientas Certificadas', highlight: false },
  { name: 'FOX RACING', role: 'Suspensiones Premium', highlight: false },
  { name: 'ROCKSHOX', role: 'Suspensiones Premium', highlight: false },
  { name: 'MANITOU', role: 'Horquillas & Amortiguadores', highlight: false },
  { name: 'DT SWISS', role: 'Ruedas & Suspensión', highlight: false },
]
