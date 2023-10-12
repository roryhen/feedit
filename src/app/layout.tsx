import '@radix-ui/themes/styles.css'
import { Providers } from './Providers'
import { Tabs } from './Tabs'
import Login from './Login'
import { Container } from '@radix-ui/themes'

export const metadata = {
  title: 'Feedit',
  description: 'your RSS feed reader',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Container>
            <Login />
            {children}
            <Tabs />
          </Container>
        </Providers>
      </body>
    </html>
  )
}
