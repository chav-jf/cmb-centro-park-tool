import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  ExternalLink,
  Hash,
  Mail,
  MapPin,
  Package,
  Phone,
  Tag,
  Truck,
} from 'lucide-react'
import { SHIPPING, carriers, packingSteps, shippingWaLink } from '../data/shipping'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const WA_TEXT = 'Hola CMB! Quiero coordinar el envío de mi suspensión para servicio.'

export function EnviosPage() {
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

          <motion.div initial="hidden" animate="show" variants={staggerContainer(0.1)}>
            <motion.p
              variants={fadeUpItem}
              className="mt-10 font-accent text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              · Recepción y Envíos
            </motion.p>
            <motion.h1
              variants={fadeUpItem}
              className="mt-5 whitespace-pre-line font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] text-white"
            >
              {'CÓMO HACER\nMI ENVÍO'}
            </motion.h1>

            {/* Banner envío gratis ND Tuned */}
            <motion.div
              variants={fadeUpItem}
              className="mt-8 inline-flex items-center gap-3 border border-[rgba(91,75,214,0.4)] bg-surface px-6 py-4"
            >
              <Truck size={22} className="shrink-0 text-accent" />
              <p className="font-body text-[0.95rem] text-white">
                <strong className="text-white">Envío gratuito</strong> a cualquier parte del país en
                cambio de barras{' '}
                <span className="font-accent uppercase tracking-wide text-accent">ND Tuned</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Intro */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
        >
          <motion.p variants={fadeUpItem} className="font-body leading-[1.75] text-white/75">
            Si necesitas enviar una suspensión para servicio con nosotros, sigue estas
            recomendaciones para asegurar que llegue en buen estado. CMB Centro ParkTool no es
            responsable de los retrasos causados por empresas de envío u otro transportista. El
            tiempo estimado de envío varía entre{' '}
            <strong className="text-white">{SHIPPING.etaDias} días laborables</strong> en función de
            la dirección de entrega.
          </motion.p>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-accent"
          >
            Por favor, diligencia el siguiente formulario ↓
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={SHIPPING.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h"
            >
              Diligenciar formulario de envío <ExternalLink size={16} />
            </a>
            <a
              href={shippingWaLink(WA_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors hover:text-accent"
            >
              o escríbenos por WhatsApp
            </a>
          </motion.div>
        </motion.section>

        {/* Recomendaciones */}
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
            Recomendaciones para tu envío
          </motion.h2>
          <motion.div variants={fadeUpItem} className="mt-8 grid gap-4 md:grid-cols-3">
            {packingSteps.map((step, i) => {
              const Icon = [Package, Tag, Truck][i]
              return (
                <div
                  key={step.title}
                  className="flex h-full flex-col border border-line border-t-2 border-t-accent bg-surface p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={26} className="text-accent" strokeWidth={1.5} />
                    <span className="font-display text-[2.5rem] leading-none text-white/15">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[1.5rem] leading-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-[0.9rem] leading-relaxed text-white/70">
                    {step.text}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </motion.section>

        {/* Empresas de envío en Pasto */}
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
            Empresas de envío en Pasto
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-4 max-w-2xl font-body leading-relaxed text-white/70"
          >
            Empresas con sucursal en la ciudad de Pasto. Antes de enviar, revisa las políticas de la
            empresa que elijas y verifica que cumplan con tus necesidades.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-8 grid gap-4 sm:grid-cols-3">
            {carriers.map((carrier) => (
              <div key={carrier.name} className="border border-line bg-surface p-6">
                <div className="flex items-center gap-2.5">
                  <Building2 size={18} className="text-accent" strokeWidth={1.5} />
                  <p className="font-display text-[1.6rem] leading-none text-white">
                    {carrier.name}
                  </p>
                </div>
                <p className="mt-3 flex items-start gap-2 font-body text-[0.85rem] text-white/70">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-muted" />
                  {carrier.address}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Nuestras instalaciones */}
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
            Envía, entrega o recoge en el taller
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-3 font-accent text-[0.72rem] uppercase tracking-[0.14em] text-accent"
          >
            CMB Centro ParkTool — Taller de Bicicletas Pasto
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={SHIPPING.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border border-line bg-surface p-6 transition-colors hover:border-[rgba(91,75,214,0.45)]"
            >
              <MapPin size={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-accent text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                  Dirección
                </p>
                <p className="mt-1.5 font-body text-[0.95rem] leading-relaxed text-white transition-colors group-hover:text-accent">
                  {SHIPPING.address}
                </p>
              </div>
            </a>
            <a
              href={shippingWaLink(WA_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border border-line bg-surface p-6 transition-colors hover:border-[rgba(91,75,214,0.45)]"
            >
              <Phone size={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-accent text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                  Celular / WhatsApp
                </p>
                <p className="mt-1.5 font-body text-[0.95rem] text-white transition-colors group-hover:text-accent">
                  {SHIPPING.phone}
                </p>
              </div>
            </a>
            <div className="flex items-start gap-4 border border-line bg-surface p-6">
              <Hash size={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-accent text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                  Código postal
                </p>
                <p className="mt-1.5 font-body text-[0.95rem] text-white">{SHIPPING.postalCode}</p>
              </div>
            </div>
            <a
              href={`mailto:${SHIPPING.email}`}
              className="group flex items-start gap-4 border border-line bg-surface p-6 transition-colors hover:border-[rgba(91,75,214,0.45)]"
            >
              <Mail size={22} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-accent text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                  Correo
                </p>
                <p className="mt-1.5 break-words font-body text-[0.95rem] text-white transition-colors group-hover:text-accent">
                  {SHIPPING.email}
                </p>
              </div>
            </a>
          </motion.div>
        </motion.section>

        {/* Política de retiro 90 días */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-16"
        >
          <motion.div
            variants={fadeUpItem}
            className="flex items-start gap-4 border border-line border-l-2 border-l-accent bg-surface2 p-6"
          >
            <AlertTriangle size={22} className="mt-0.5 shrink-0 text-accent" />
            <p className="font-body text-[0.92rem] leading-relaxed text-white/80">
              El material deberá ser retirado por el cliente en un plazo máximo de{' '}
              <strong className="text-white">{SHIPPING.retiroMaxDias} días</strong>. Si el cliente no
              recoge el material o equipo durante el período establecido, CMB Centro ParkTool no se
              hace responsable por dicho material y lo enviará a reciclar para destrucción.
            </p>
          </motion.div>
        </motion.section>

        {/* CTA final */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center"
        >
          <motion.a
            variants={fadeUpItem}
            href={SHIPPING.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h"
          >
            Diligenciar formulario de envío <ExternalLink size={16} />
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
