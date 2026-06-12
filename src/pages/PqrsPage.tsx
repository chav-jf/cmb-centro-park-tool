import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Check,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  RotateCcw,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react'
import { PQRS } from '../data/pqrs'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const cubre = [
  'La calidad en la prestación del servicio',
  'Fallas derivadas directamente del trabajo realizado',
]

const noCubre = [
  'Daños por uso indebido del producto',
  'Manipulación por terceros',
  'Fuerza mayor o caso fortuito',
  'Falta del mantenimiento recomendado',
]

const canales = [
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: PQRS.email,
    href: `mailto:${PQRS.email}`,
    external: false,
  },
  {
    icon: FileText,
    label: 'Formulario en línea',
    value: 'Diligenciar formulario PQRS',
    href: PQRS.formUrl,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Atención presencial',
    value: PQRS.address,
    href: PQRS.mapsUrl,
    external: true,
  },
]

export function PqrsPage() {
  return (
    <main className="bg-bg pt-32">
      {/* Encabezado */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 0%, rgba(91,75,214,0.14) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-16">
          <Link
            to="/"
            className="link-underline inline-flex items-center gap-2 font-accent text-[0.72rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} /> Volver al inicio
          </Link>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.1)}
          >
            <motion.p
              variants={fadeUpItem}
              className="mt-10 font-accent text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              · Atención al Cliente
            </motion.p>
            <motion.h1
              variants={fadeUpItem}
              className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] text-white"
            >
              PQRS
            </motion.h1>
            <motion.p
              variants={fadeUpItem}
              className="mt-4 max-w-2xl font-body text-lg leading-[1.6] text-white/80"
            >
              Aviso al Consumidor — Garantía Legal y Atención de Reclamos
            </motion.p>
            <motion.p
              variants={fadeUpItem}
              className="mt-2 font-accent text-[0.72rem] uppercase tracking-[0.14em] text-muted"
            >
              Centro de Mantenimiento para Bicicletas — CMB
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Garantía legal */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
        >
          <motion.div variants={fadeUpItem} className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-accent" />
            <h2 className="font-display text-[2.4rem] leading-none text-white">Garantía Legal</h2>
          </motion.div>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 font-body leading-[1.75] text-white/75"
          >
            De conformidad con la <strong className="text-white">Ley 1480 de 2011 — Estatuto del
            Consumidor</strong>, todos los servicios prestados por CMB cuentan con garantía legal de{' '}
            <strong className="text-white">tres (3) meses</strong>, contados a partir de la fecha de
            entrega del producto reparado.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="border border-line border-t-2 border-t-accent bg-surface p-7">
              <p className="font-accent text-[0.68rem] uppercase tracking-[0.15em] text-accent">
                Qué cubre
              </p>
              <ul className="mt-5 space-y-3">
                {cubre.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.5} />
                    <span className="font-body text-[0.92rem] leading-relaxed text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line border-t-2 border-t-white/20 bg-surface p-7">
              <p className="font-accent text-[0.68rem] uppercase tracking-[0.15em] text-muted">
                Qué no cubre
              </p>
              <ul className="mt-5 space-y-3">
                {noCubre.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={16} className="mt-0.5 shrink-0 text-muted" strokeWidth={2.5} />
                    <span className="font-body text-[0.92rem] leading-relaxed text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* Canales de atención */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-20"
        >
          <motion.h2
            variants={fadeUpItem}
            className="font-display text-[2.4rem] leading-none text-white"
          >
            Canales de atención
          </motion.h2>
          <motion.div variants={fadeUpItem} className="mt-8 grid gap-4 md:grid-cols-3">
            {canales.map((canal) => {
              const Icon = canal.icon
              return (
                <a
                  key={canal.label}
                  href={canal.href}
                  target={canal.external ? '_blank' : undefined}
                  rel={canal.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col gap-4 border border-line bg-surface p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[rgba(91,75,214,0.45)]"
                >
                  <Icon size={26} className="text-accent" strokeWidth={1.5} />
                  <div>
                    <p className="font-accent text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                      {canal.label}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 break-words font-body text-[0.95rem] text-white transition-colors group-hover:text-accent">
                      {canal.value}
                      {canal.external && <ExternalLink size={13} className="shrink-0" />}
                    </p>
                  </div>
                </a>
              )
            })}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="mt-6 flex items-start gap-4 border border-line bg-surface2 p-6"
          >
            <Clock size={22} className="mt-0.5 shrink-0 text-accent" />
            <p className="font-body text-[0.92rem] leading-relaxed text-white/75">
              Todas las solicitudes serán atendidas dentro de los plazos establecidos por la{' '}
              <strong className="text-white">Superintendencia de Industria y Comercio (SIC)</strong>.
              El consumidor recibirá confirmación de su solicitud y podrá hacer seguimiento a través
              de los medios de contacto registrados.
            </p>
          </motion.div>
        </motion.section>

        {/* Derecho de retracto */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-20"
        >
          <motion.div variants={fadeUpItem} className="flex items-center gap-3">
            <RotateCcw size={22} className="text-accent" />
            <h2 className="font-display text-[2.4rem] leading-none text-white">
              Derecho de Retracto
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 font-body leading-[1.75] text-white/75"
          >
            De conformidad con el <strong className="text-white">artículo 47 de la Ley 1480 de
            2011</strong>, cuando el servicio haya sido contratado a través de medios no presenciales
            (por ejemplo, Internet, teléfono o mensajería digital), el consumidor podrá ejercer su
            derecho de retracto dentro de los{' '}
            <strong className="text-white">cinco (5) días hábiles</strong> siguientes a la
            contratación, siempre que el servicio no haya comenzado a ejecutarse.
          </motion.p>
          <motion.p
            variants={fadeUpItem}
            className="mt-4 font-body leading-[1.75] text-white/75"
          >
            Para ejercer este derecho, el consumidor deberá presentar su solicitud por escrito a
            través de los canales de atención dispuestos por CMB.
          </motion.p>
          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex items-start gap-4 border border-line border-l-2 border-l-accent bg-surface p-6"
          >
            <Scale size={22} className="mt-0.5 shrink-0 text-accent" />
            <p className="font-body text-[0.92rem] leading-relaxed text-white/80">
              En caso de que proceda, se realizará la{' '}
              <strong className="text-white">devolución total del dinero pagado</strong>, sin
              descuentos ni retenciones, dentro de los{' '}
              <strong className="text-white">treinta (30) días calendario</strong> siguientes a la
              solicitud.
            </p>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-20 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center"
        >
          <motion.a
            variants={fadeUpItem}
            href={PQRS.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h"
          >
            Radicar PQRS <ExternalLink size={16} />
          </motion.a>
          <motion.div variants={fadeUpItem}>
            <Link
              to="/"
              className="link-underline inline-flex items-center gap-2 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors hover:text-accent"
            >
              <ArrowLeft size={15} /> Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
