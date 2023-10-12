import { Flex, Link } from '@radix-ui/themes'

export function Tabs() {
  return (
    <nav aria-label="app navigation" style={{ position: 'fixed', bottom: 0 }}>
      <Flex gap="2" justify={'center'}>
        <Link href="/" size={'6'}>
          Feed
        </Link>
        <Link href="/settings" size={'6'}>
          Settings
        </Link>
        <Link href="/profile" size={'6'}>
          Profile
        </Link>
      </Flex>
    </nav>
  )
}
