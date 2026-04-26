'use client'

export function VideoControls({
  playing,
  muted,
  onTogglePlaying,
  onToggleMuted,
}: {
  playing: boolean
  muted: boolean
  onTogglePlaying: () => void
  onToggleMuted: () => void
}) {
  return (
    <div className="bb-video-controls">
      <button onClick={onTogglePlaying}>{playing ? 'Pause' : 'Play'}</button>
      <button onClick={onToggleMuted}>{muted ? 'Unmute' : 'Mute'}</button>
    </div>
  )
}
