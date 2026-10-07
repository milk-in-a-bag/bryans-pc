'use client'

import dynamic from 'next/dynamic'

const Desktop = dynamic(() => import('./Desktop'), { ssr: false })

export default function ClientDesktop() {
  return <Desktop />
}
