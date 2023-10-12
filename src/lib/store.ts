import { kv } from '@vercel/kv'
import {
  getSessionId,
  getSessionIdAndCreateIfMissing,
  removeSessionId,
} from './session'

export const KEY_USERNAME = 'username'
export const KEY_FEEDS = 'feeds'
export const KEY_ARTICLES = 'articles'

export function get(key: string, namespace: string = '') {
  const sessionId = getSessionId()
  if (!sessionId) {
    return null
  }
  return kv.hget(`session-${namespace}-${sessionId}`, key)
}

export function getAll(namespace: string = '') {
  const sessionId = getSessionId()
  if (!sessionId) {
    return null
  }
  return kv.hgetall(`session-${namespace}-${sessionId}`)
}

export function set(
  key: string,
  value: string | string[],
  namespace: string = '',
) {
  const sessionId = getSessionIdAndCreateIfMissing()
  return kv.hset(`session-${namespace}-${sessionId}`, { [key]: value })
}

export function del(key: string, namespace: string = '') {
  const sessionId = getSessionId()
  if (!sessionId) {
    return null
  }
  removeSessionId()
  return kv.hdel(`session-${namespace}-${sessionId}`, key)
}
