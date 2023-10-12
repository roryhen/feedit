'use client'

import { Theme } from '@radix-ui/themes'

export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <Theme appearance='dark' accentColor='amber' panelBackground='solid' radius='small'>
      {children}
    </Theme>
  )
}
