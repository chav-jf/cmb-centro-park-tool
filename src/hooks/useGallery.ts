import { useCallback, useState } from 'react'

const STORAGE_KEY = 'cmb_gallery_images_v1'
const MAX_IMAGES = 8
const MAX_SIZE_MB = 5

export interface GalleryImage {
  id: string
  /** Ruta pública (fotos pre-cargadas) o dataURL (subidas por el usuario). */
  src: string
}

type Slots = (GalleryImage | null)[]

const SEED_IMAGES: GalleryImage[] = [
  { id: 'seed-1', src: '/gallery/image1.jpg' },
  { id: 'seed-2', src: '/gallery/image2.webp' },
  { id: 'seed-3', src: '/gallery/image3.webp' },
  { id: 'seed-4', src: '/gallery/image4.webp' },
  { id: 'seed-5', src: '/gallery/largeimage.webp' },
]

function initialSlots(): Slots {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as Slots
      return Array.from({ length: MAX_IMAGES }, (_, i) => parsed[i] ?? null)
    }
  } catch {
    // localStorage no disponible o JSON corrupto: caer al seed
  }
  return Array.from({ length: MAX_IMAGES }, (_, i) => SEED_IMAGES[i] ?? null)
}

function persist(slots: Slots): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slots))
  } catch {
    // cuota de localStorage excedida: la imagen vive solo en memoria
  }
}

export function useGallery() {
  const [images, setImages] = useState<Slots>(initialSlots)

  /** Devuelve un mensaje de error o null si el archivo fue aceptado. */
  const upload = useCallback((index: number, file: File): string | null => {
    if (!file.type.startsWith('image/')) {
      return 'Solo se permiten imágenes'
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return `La imagen no puede superar ${MAX_SIZE_MB}MB`
    }
    const reader = new FileReader()
    reader.onload = () => {
      const src = reader.result
      if (typeof src !== 'string') return
      setImages((prev) => {
        const next = [...prev]
        next[index] = { id: Date.now().toString(), src }
        persist(next)
        return next
      })
    }
    reader.readAsDataURL(file)
    return null
  }, [])

  const remove = useCallback((index: number) => {
    setImages((prev) => {
      const next = [...prev]
      next[index] = null
      persist(next)
      return next
    })
  }, [])

  return { images, upload, remove }
}
