'use client'

import { useState } from 'react'

export function LanguageToggle() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn')

  return (
    <button onClick={() => setLang((value) => (value === 'bn' ? 'en' : 'bn'))}>
      {lang === 'bn' ? 'Eng' : 'বাংলা'}
    </button>
  )
}
