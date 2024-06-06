import { kv } from '@vercel/kv'
import {
  getSessionId,
  getSessionIdAndCreateIfMissing,
  removeSessionId,
} from './session'

export const KEY_USERNAME = 'username'

export async function getSession() {
  const sessionId = getSessionId()
  if (!sessionId) {
    return null
  }
  return await kv.hget<string>(`session:${sessionId}`, KEY_USERNAME)
}

export async function setSession(value: string) {
  const sessionId = getSessionIdAndCreateIfMissing()
  return await kv.hset(`session:${sessionId}`, { [KEY_USERNAME]: value })
}

export async function deleteSession() {
  const sessionId = getSessionId()
  if (!sessionId) {
    return null
  }
  removeSessionId()
  return await kv.hdel(`session:${sessionId}`, KEY_USERNAME)
}
