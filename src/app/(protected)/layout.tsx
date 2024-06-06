import { Container, Flex, Section } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { Providers } from '../Providers'
import { Tabs } from './Tabs'
import { authSession } from '../api/auth/[...nextauth]/route'
import { Suspense } from 'react'

export const metadata = {
  title: 'Feedit',
  description: 'your RSS feed reader',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await authSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers context={{ session: null }}>
          <Container>
            <Flex gap="4" py="6">
              <Suspense fallback={<div>Loading...</div>}>
                <Tabs />
              </Suspense>
              <Section p="6" grow="1">
                {children}
              </Section>
            </Flex>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
