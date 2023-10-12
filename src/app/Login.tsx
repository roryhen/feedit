import { Button, Flex, TextFieldInput } from '@radix-ui/themes'
import { login, logout } from './actions'
import { getSessionId } from '@/lib/session'

export default function Login() {
  const session = getSessionId()

  if (session) {
    return (
      <form action={logout}>
        <Button>Logout</Button>
      </form>
    )
  }

  return (
    <form action={login}>
      <Flex gap={'2'}>
        <TextFieldInput placeholder="Username" name="username" />
        <Button>Login</Button>
      </Flex>
    </form>
  )
}
