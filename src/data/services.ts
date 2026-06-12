export type ServiceIcon =
  | 'Wrench'
  | 'Settings2'
  | 'Zap'
  | 'Truck'
  | 'Layers'
  | 'MessageSquare'

export interface Service {
  id: 'centro' | 'suspension' | 'emove' | 'movil' | 'carbon' | 'pqrs'
  tag: string
  name: string
  description: string
  features: string[]
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    id: 'centro',
    tag: 'TALLER PRINCIPAL',
    name: 'CMB Centro\nPark Tool',
    description:
      'Mantenimiento general con herramientas Park Tool certificadas. Diagnóstico completo, ajuste de transmisión, frenos hidráulicos, dirección y rodamientos.',
    features: [
      'Diagnóstico Completo',
      'Ajuste de Transmisión',
      'Frenos Hidráulicos',
      'Rodamientos & Dirección',
    ],
    icon: 'Wrench',
  },
  {
    id: 'suspension',
    tag: 'LABORATORIO',
    name: 'CMB Suspension\nLab',
    description:
      'Especialistas en horquillas Fox Factory, RockShox Premier, Manitou y DT Swiss. Rebuild completo, ajuste de rebound/compresión. Distribuidor oficial ND Tuned Colombia.',
    features: [
      'Fox Factory & RockShox',
      'ND Tuned Sistema OVR',
      'Kits de Mantenimiento',
      'Bleeding & Rebuild',
    ],
    icon: 'Settings2',
  },
  {
    id: 'emove',
    tag: 'ELÉCTRICO',
    name: 'CMB\nE-Move Bike',
    description:
      'Diagnóstico y mantenimiento integral para bicicletas eléctricas. Motores Bosch, Shimano EP801, Brose. Revisión de baterías, controladores y sistemas de asistencia.',
    features: [
      'Motores Bosch & Shimano',
      'Revisión de Baterías',
      'Diagnóstico Electrónico',
      'Actualización Firmware',
    ],
    icon: 'Zap',
  },
  {
    id: 'movil',
    tag: 'A DOMICILIO',
    name: 'CMB\nTaller Móvil',
    description:
      'El taller va donde estás. Servicio de mantenimiento a domicilio en Pasto y área metropolitana de Nariño. Agenda tu cita y recibe atención profesional en casa.',
    features: [
      'Pasto y Alrededores',
      'Cita con Anticipación',
      'Herramientas Park Tool',
      'Mantenimiento Preventivo',
    ],
    icon: 'Truck',
  },
  {
    id: 'carbon',
    tag: 'PREMIUM',
    name: 'CMB\nCarbon Bike',
    description:
      'Inspección visual y ultrasónica de cuadros de fibra de carbono. Detección de grietas, delaminaciones y daños estructurales. Reparación de laminados y acabados premium.',
    features: [
      'Inspección Visual & Táctil',
      'Detección de Grietas',
      'Reparación de Laminados',
      'Acabados de Alto Brillo',
    ],
    icon: 'Layers',
  },
  {
    id: 'pqrs',
    tag: 'ATENCIÓN AL CLIENTE',
    name: 'PQRS',
    description:
      'Canal oficial de Peticiones, Quejas, Reclamos y Sugerencias. Tu opinión construye el mejor taller de Pasto. Respuesta garantizada en 24 horas hábiles.',
    features: ['Peticiones', 'Quejas & Reclamos', 'Sugerencias', 'Respuesta en 24h'],
    icon: 'MessageSquare',
  },
]
