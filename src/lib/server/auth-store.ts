import { kv } from '@vercel/kv'
import { getSession } from './session-store'

export async function getUser() {
  const username = await getSession()
  if (!username) {
    return null
  }
  return await kv.get(`user:${username}`)
}

export async function setUser(details: { name: string; email: string }) {
  const username = await getSession()
  if (!username) {
    return null
  }
  return await kv.set(`user:${username}`, {
    name: details.name,
    email: details.email,
  })
}
