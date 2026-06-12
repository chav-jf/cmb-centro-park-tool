export const SHIPPING = {
  /** Celular del taller (también WhatsApp). */
  phone: '316 250 7345',
  phoneIntl: '573162507345',
  email: 'cmbcentroparktool@gmail.com',
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSeiiy0381zQ3M8MaLs7md2W8A-3oziN0XhzEHGoX4Dj8ntE1w/viewform',
  address:
    'Calle 16 #28-97, San Andrés (diagonal al parque Rumipamba), Pasto, Colombia',
  postalCode: '520002',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+16+28-97+San+Andres+Pasto+Nari%C3%B1o',
  /** Plazo máximo para retirar el material (días). */
  retiroMaxDias: 90,
  /** Rango estimado de envío en días laborables. */
  etaDias: '1–3',
} as const

/** WhatsApp directo al taller para coordinar el envío. */
export function shippingWaLink(text: string): string {
  return `https://wa.me/${SHIPPING.phoneIntl}?text=${encodeURIComponent(text)}`
}

export interface PackingStep {
  title: string
  text: string
}

export const packingSteps: PackingStep[] = [
  {
    title: 'Empaca cuidadosamente',
    text: 'Envuelve la suspensión con suficiente papel burbuja, papel kraft y/o espuma. Usa una caja de cartón rígido para evitar daños durante el transporte.',
  },
  {
    title: 'Etiqueta correctamente',
    text: 'Incluye los datos de remitente y destinatario, junto con la dirección de entrega completa.',
  },
  {
    title: 'Selecciona el servicio adecuado',
    text: 'Elige una empresa de envío confiable y de buena reputación para que tu suspensión llegue en buen estado y en el plazo acordado.',
  },
]

export interface Carrier {
  name: string
  address: string
}

export const carriers: Carrier[] = [
  { name: 'Servientrega', address: 'Carrera 24 #17-80' },
  { name: 'Envía', address: 'Calle 18 #34-11' },
  { name: 'Coordinadora', address: 'Calle 17 #37-03' },
]
