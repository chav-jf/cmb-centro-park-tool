import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Facebook,
  FileText,
  Instagram,
  Loader2,
  MapPin,
  MessageCircle,
  Truck,
} from 'lucide-react'
import { MagneticButton } from '../components/interactive/MagneticButton'
import { services } from '../data/services'
import { MAPS_EMBED, MAPS_URL, waLink } from '../data/social'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const SERVICE_IDS = ['centro', 'suspension', 'emove', 'movil', 'carbon', 'pqrs'] as const

const contactSchema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres'),
  whatsapp: z.string().min(7, 'Número inválido'),
  email: z.union([z.literal(''), z.email('Correo electrónico inválido')]).optional(),
  servicio: z.enum(SERVICE_IDS, { message: 'Selecciona un servicio' }),
  descripcion: z
    .string()
    .min(10, 'Cuéntanos un poco más (mínimo 10 caracteres)')
    .max(500, 'Máximo 500 caracteres'),
  acepta_datos: z.boolean().refine((v) => v, { message: 'Requerido' }),
})

type ContactFormValues = z.infer<typeof contactSchema>

const serviceOptions = services.map((s) => ({
  id: s.id,
  label: s.name.replace('\n', ' '),
}))


const inputClass =
  'mt-2 w-full border-b border-white/20 bg-transparent pb-3 font-body text-white outline-none transition-[border-color] duration-200 placeholder:text-[#56527d] focus:border-accent'
const labelClass =
  'font-accent text-[0.7rem] uppercase tracking-[0.14em] text-muted transition-colors duration-200 group-focus-within:text-accent'
const errorClass = 'mt-2 font-accent text-[0.68rem] text-accent'

export function ContactSection() {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { acepta_datos: false },
  })

  const onSubmit = (data: ContactFormValues): void => {
    const servicioLabel =
      serviceOptions.find((s) => s.id === data.servicio)?.label ?? data.servicio
    const msg =
      `Hola CMB! Soy ${data.nombre}.\n` +
      `Servicio: ${servicioLabel}\n` +
      `${data.descripcion}\n` +
      `WhatsApp: ${data.whatsapp}` +
      (data.email ? `\nEmail: ${data.email}` : '')
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
    reset()
    setSuccess(true)
    window.setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <section id="contacto" className="bg-[#0E0B28] py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[55fr_45fr]">
        {/* Formulario */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
        >
          <motion.p
            variants={fadeUpItem}
            className="font-accent text-[0.72rem] uppercase tracking-[0.18em] text-accent"
          >
            · Agenda Tu Servicio
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'HABLEMOS\nDE TU BICI'}
          </motion.h2>

          <motion.form
            variants={fadeUpItem}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 space-y-8"
            noValidate
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="group">
                <label htmlFor="nombre" className={labelClass}>
                  Nombre *
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  {...register('nombre')}
                  className={inputClass}
                />
                {errors.nombre && (
                  <p role="alert" className={errorClass}>
                    {errors.nombre.message}
                  </p>
                )}
              </div>
              <div className="group">
                <label htmlFor="whatsapp" className={labelClass}>
                  WhatsApp *
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  placeholder="300 000 0000"
                  autoComplete="tel"
                  {...register('whatsapp')}
                  className={inputClass}
                />
                {errors.whatsapp && (
                  <p role="alert" className={errorClass}>
                    {errors.whatsapp.message}
                  </p>
                )}
              </div>
            </div>

            <div className="group">
              <label htmlFor="email" className={labelClass}>
                Email (opcional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                autoComplete="email"
                {...register('email')}
                className={inputClass}
              />
              {errors.email && (
                <p role="alert" className={errorClass}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="group">
              <label htmlFor="servicio" className={labelClass}>
                Servicio *
              </label>
              <div className="relative">
                <select
                  id="servicio"
                  defaultValue=""
                  {...register('servicio')}
                  className={`${inputClass} appearance-none pr-8`}
                >
                  <option value="" disabled className="bg-surface text-muted">
                    Selecciona una división
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option.id} value={option.id} className="bg-surface text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-muted"
                />
              </div>
              {errors.servicio && (
                <p role="alert" className={errorClass}>
                  {errors.servicio.message}
                </p>
              )}
            </div>

            <div className="group">
              <label htmlFor="descripcion" className={labelClass}>
                ¿Qué necesita tu bici? *
              </label>
              <textarea
                id="descripcion"
                rows={4}
                placeholder="Describe el estado de tu bicicleta o el servicio que necesitas…"
                {...register('descripcion')}
                className={`${inputClass} resize-none`}
              />
              {errors.descripcion && (
                <p role="alert" className={errorClass}>
                  {errors.descripcion.message}
                </p>
              )}
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  {...register('acepta_datos')}
                  className="mt-0.5 h-4 w-4 accent-accent"
                />
                <span className="font-body text-[0.85rem] leading-relaxed text-[#9a96b8]">
                  Acepto el tratamiento de mis datos personales (Ley 1581 de 2012)
                </span>
              </label>
              {errors.acepta_datos && (
                <p role="alert" className={errorClass}>
                  {errors.acepta_datos.message}
                </p>
              )}
            </div>

            <MagneticButton
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h disabled:opacity-60"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Enviar por WhatsApp
                  <ArrowUpRight size={18} strokeWidth={2} />
                </>
              )}
            </MagneticButton>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 border border-[rgba(91,75,214,0.35)] bg-surface p-4"
                  role="status"
                >
                  <CheckCircle2 size={22} className="shrink-0 text-accent" />
                  <p className="font-body text-sm text-white">
                    ¡Listo! Tu mensaje se abrió en WhatsApp. Te responderemos muy pronto.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>

        {/* Información de contacto */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="lg:pt-24"
        >
          <motion.h3
            variants={fadeUpItem}
            className="whitespace-pre-line font-display text-[2.5rem] leading-[1.05] text-white"
          >
            {'Información de\ncontacto'}
          </motion.h3>

          <motion.ul variants={fadeUpItem} className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <MapPin size={20} className="shrink-0 text-accent" />
              <span className="font-body text-[0.95rem] text-white/80">
                Pasto, Nariño, Colombia
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Clock size={20} className="shrink-0 text-accent" />
              <span className="font-body text-[0.95rem] text-white/80">
                Lun – Sáb: 8:00am – 6:00pm
              </span>
            </li>
            <li className="flex items-center gap-4">
              <MessageCircle size={20} className="shrink-0 text-accent" />
              <a
                href={waLink('Hola CMB! Quiero más información.')}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-body text-[0.95rem] text-[#25D366]"
              >
                WhatsApp directo
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Instagram size={20} className="shrink-0 text-accent" />
              <a
                href="https://instagram.com/cmbcentroparktool"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-body text-[0.95rem] text-white/80"
              >
                @cmbcentroparktool
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Facebook size={20} className="shrink-0 text-accent" />
              <a
                href="https://facebook.com/cmbcentroparktool"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-body text-[0.95rem] text-white/80"
              >
                CMB Centro ParkTool
              </a>
            </li>
          </motion.ul>

          <motion.div variants={fadeUpItem} className="mt-10">
            <MagneticButton
              href={waLink('Hola CMB! Quiero chatear con ustedes.')}
              external
              className="w-full rounded-full bg-[#25D366] px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#20BD5A]"
            >
              Chatear por WhatsApp
              <ArrowUpRight size={18} strokeWidth={2} />
            </MagneticButton>
          </motion.div>

          {/* Accesos a páginas de envíos y PQRS */}
          <motion.div variants={fadeUpItem} className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              to="/envios"
              className="group flex items-center justify-between gap-3 border border-line bg-surface p-4 transition-colors hover:border-[rgba(91,75,214,0.45)]"
            >
              <span className="flex items-center gap-3">
                <Truck size={18} className="text-accent" strokeWidth={1.5} />
                <span className="font-accent text-[0.7rem] uppercase tracking-[0.12em] text-white">
                  Cómo hacer mi envío
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </Link>
            <Link
              to="/pqrs"
              className="group flex items-center justify-between gap-3 border border-line bg-surface p-4 transition-colors hover:border-[rgba(91,75,214,0.45)]"
            >
              <span className="flex items-center gap-3">
                <FileText size={18} className="text-accent" strokeWidth={1.5} />
                <span className="font-accent text-[0.7rem] uppercase tracking-[0.12em] text-white">
                  PQRS &amp; Garantía
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </Link>
          </motion.div>

          {/* Mapa del taller */}
          <motion.div variants={fadeUpItem} className="mt-10">
            <div className="overflow-hidden border border-[rgba(91,75,214,0.3)]">
              <iframe
                src={MAPS_EMBED}
                title="Ubicación del taller CMB en Pasto"
                width="100%"
                height={280}
                style={{ border: 0, filter: 'grayscale(0.3) invert(0.92) hue-rotate(180deg)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-3 inline-flex items-center gap-2 font-accent text-[0.72rem] uppercase tracking-[0.14em] text-accent"
            >
              <MapPin size={14} /> Ubícanos en Google Maps →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
