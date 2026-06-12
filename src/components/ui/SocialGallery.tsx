import { useRef, useState, type ChangeEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Camera, Eye, X } from 'lucide-react'
import { useGallery } from '../../hooks/useGallery'

export function SocialGallery() {
  const { images, upload, remove } = useGallery()
  const [error, setError] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pendingIndex = useRef(0)
  const errorTimer = useRef<number>()

  const openPicker = (index: number): void => {
    pendingIndex.current = index
    inputRef.current?.click()
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    const err = upload(pendingIndex.current, file)
    if (err) {
      setError(err)
      window.clearTimeout(errorTimer.current)
      errorTimer.current = window.setTimeout(() => setError(null), 3000)
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
        aria-label="Subir foto a la galería"
      />

      <div className="grid grid-cols-2 gap-[3px] md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, index) =>
          img ? (
            <motion.div
              key={img.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square cursor-pointer overflow-hidden"
            >
              <img
                src={img.src}
                alt="Trabajo del taller CMB"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setLightbox(img.src)}
                className="absolute inset-0 flex items-center justify-center bg-[rgba(91,75,214,0.6)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-label="Ver foto"
              >
                <Eye size={32} color="white" />
              </button>
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute right-2 top-2 bg-black/70 p-1.5 text-white opacity-0 transition-opacity duration-200 hover:bg-accent group-hover:opacity-100"
                aria-label="Eliminar foto"
              >
                <X size={16} />
              </button>
            </motion.div>
          ) : (
            <button
              key={`empty-${index}`}
              type="button"
              onClick={() => openPicker(index)}
              className="group flex aspect-square flex-col items-center justify-center gap-2 border-2 border-dashed border-white/10 bg-surface transition-colors duration-200 hover:border-[rgba(91,75,214,0.45)]"
            >
              <Camera
                size={28}
                className="text-[#56527d] transition-colors duration-200 group-hover:text-accent"
              />
              <span className="font-accent text-[0.7rem] text-[#56527d]">Subir foto</span>
            </button>
          ),
        )}
      </div>

      {/* Error de validación */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 font-accent text-[0.75rem] uppercase tracking-[0.14em] text-accent"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-6"
            data-lenis-prevent
          >
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightbox}
              alt="Foto ampliada del taller CMB"
              className="max-h-[85vh] max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 bg-black/70 p-2 text-white transition-colors hover:bg-accent"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
