import { Container, Flex, Section } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { Providers } from '../Providers'

export const metadata = {
  title: 'Feedit',
  description: 'your RSS feed reader',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Container>
            <Flex gap="4" py="6">
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
