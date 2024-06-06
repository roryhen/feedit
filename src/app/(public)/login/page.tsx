import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
  TextFieldInput,
} from '@radix-ui/themes'
import { getCsrfToken } from 'next-auth/react'
import { login } from './actions'

const CALLBACK_URL = process.env.NEXTAUTH_URL

export default async function Login() {
  const csrfToken = await getCsrfToken()

  return (
    <Grid columns="3">
      <Card style={{ gridColumn: '2' }}>
        <Grid gap="4" p="3">
          <Box>
            <Heading>Login</Heading>
            <Text size="2">Enter your username here to sign in</Text>
          </Box>
          <form action={login}>
            <Grid gap="2">
              <input type="hidden" name="crsfToken" value={csrfToken} />
              <TextFieldInput
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <Button>Login</Button>
            </Grid>
          </form>
          {/* <Flex align="center" gap="2">
            <Separator size="4" />
            or
            <Separator size="4" />
          </Flex>
          <Flex direction="column" gap="3">
            <Grid asChild>
              <form action="/api/auth/signin/google" method="POST">
                <input type="hidden" name="crsfToken" value={csrfToken} />
                <input type="hidden" name="callbackUrl" value={CALLBACK_URL} />
                <Button variant="outline">Google</Button>
              </form>
            </Grid>
            <Grid asChild>
              <form action="/api/auth/signin/github" method="POST">
                <input type="hidden" name="crsfToken" value={csrfToken} />
                <input type="hidden" name="callbackUrl" value={CALLBACK_URL} />
                <Button variant="outline">GitHub</Button>
              </form>
            </Grid>
          </Flex> */}
        </Grid>
      </Card>
    </Grid>
  )
}
