'use client'

import { useRef, useState } from 'react'
import { VideoControls } from './VideoControls'

export function VideoPlayer({
  src,
  title,
}: {
  src: string
  title: string
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  return (
    <div className="bb-video-player">
      <iframe
        ref={iframeRef}
        src={`${src}${src.includes('?') ? '&' : '?'}autoplay=${playing ? 1 : 0}&mute=${muted ? 1 : 0}`}
        title={title}
        allow="autoplay; encrypted-media"
      />
      <div className="bb-video-overlay" role="group" aria-label="Video controls overlay">
        <VideoControls
          playing={playing}
          muted={muted}
          onTogglePlaying={() => setPlaying((state) => !state)}
          onToggleMuted={() => setMuted((state) => !state)}
        />
      </div>
    </div>
  )
}
