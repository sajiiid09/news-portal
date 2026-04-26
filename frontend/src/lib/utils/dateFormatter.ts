export function formatBanglaDate(isoDate: string): string {
  return new Date(isoDate).toLocaleString('bn-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}
