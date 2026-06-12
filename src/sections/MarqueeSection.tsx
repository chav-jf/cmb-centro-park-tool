import { Marquee } from '../components/interactive/Marquee'

const TICKER_TEXT =
  'SUSPENSIONES · PARK TOOL · BICICLETAS ELÉCTRICAS · FIBRA DE CARBONO · TALLER MÓVIL · ND TUNED · PASTO COLOMBIA · 15 AÑOS DE EXPERIENCIA · '

export function MarqueeSection() {
  return (
    <section className="flex h-14 items-center overflow-hidden bg-accent" aria-label="Especialidades CMB">
      <Marquee
        text={TICKER_TEXT}
        duration={35}
        className="font-accent text-sm uppercase tracking-widest text-white"
      />
    </section>
  )
}
