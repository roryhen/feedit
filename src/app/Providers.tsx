'use client'

import { Theme } from '@radix-ui/themes'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export function Providers({
  context,
  children,
}: {
  context?: {
    session?: Session | null
  }
  children: React.ReactNode
}) {
  return (
    // <SessionProvider session={context?.session}>
    <Theme
      appearance="dark"
      accentColor="amber"
      panelBackground="solid"
      radius="small"
      scaling="110%"
    >
      {children}
    </Theme>
    // </SessionProvider>
  )
}
