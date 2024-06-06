import { getSession } from '@/lib/server/session-store'
import { Button, Grid, Link } from '@radix-ui/themes'
import { logout } from '../(public)/login/actions'

export async function Tabs() {
  const user = await getSession()

  return (
    <nav aria-label="app navigation">
      <Grid gap="4" p="6">
        <Link href="/" weight="medium">
          Home
        </Link>
        <Link href="/feed" weight="medium">
          Feed
        </Link>
        <Link href="/profile" weight="medium">
          Profile
        </Link>
        {user ? (
          <Button variant="outline" formAction={logout}>
            Log out
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/login" weight="medium">
              Login
            </Link>
          </Button>
        )}
      </Grid>
    </nav>
  )
}
