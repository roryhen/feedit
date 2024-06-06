import { cookies } from 'next/headers'

const SESSION_COOKIE_NAME = 'fuid'

export function getSessionId(): string | undefined {
  const cookieStore = cookies()
  return cookieStore.get(SESSION_COOKIE_NAME)?.value
}

function setSessionId(sessionId: string): void {
  const cookieStore = cookies()
  cookieStore.set(SESSION_COOKIE_NAME, sessionId)
}

export function getSessionIdAndCreateIfMissing() {
  const sessionId = getSessionId()
  if (!sessionId) {
    const newSessionId = crypto.randomUUID()
    setSessionId(newSessionId)

    return newSessionId
  }

  return sessionId
}

export function removeSessionId() {
  const cookieStore = cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}
