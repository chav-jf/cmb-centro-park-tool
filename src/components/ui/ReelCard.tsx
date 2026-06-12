import { ExternalLink, Music2 } from 'lucide-react'
import type { Reel } from '../../data/reels'

interface ReelCardProps {
  reel: Reel
}

export function ReelCard({ reel }: ReelCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[9/16] overflow-hidden border border-line border-t-2 border-t-accent bg-black shadow-[0_24px_70px_rgba(91,75,214,0.2)]">
        <iframe
          src={`https://www.tiktok.com/player/v1/${reel.tiktokId}?rel=0&description=0`}
          title={reel.caption}
          loading="lazy"
          allow="encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          style={{ border: 0 }}
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <Music2 size={14} className="shrink-0 text-accent" />
          <span className="font-accent text-[0.6rem] uppercase tracking-[0.12em] text-muted">
            TikTok · @cmbcentroparktool
          </span>
        </div>
        <p className="mt-2 font-body text-[0.9rem] leading-snug text-white/90">{reel.caption}</p>
        <p className="mt-1.5 font-accent text-[0.62rem] leading-relaxed text-white/50">
          {reel.hashtags.map((h) => `#${h}`).join(' ')}
        </p>
        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-3 inline-flex items-center gap-1.5 font-accent text-[0.68rem] uppercase tracking-[0.12em] text-accent"
        >
          Ver en TikTok <ExternalLink size={12} />
        </a>
      </div>
    </div>
  )
}
