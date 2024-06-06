import { kv } from '@vercel/kv'
import { getSession } from './session-store'

type Article = {
  title: string
  date: string
  snippet: string
  link: string
  source: string
}

export async function getFeeds() {
  const username = await getSession()
  if (!username) {
    return null
  }
  return await kv.get<string[]>(`feeds:${username}`)
}

export async function setFeeds(value: string[]) {
  const username = await getSession()
  if (!username) {
    return null
  }
  return await kv.set(`feeds:${username}`, value)
}

export async function getUnread() {
  const username = await getSession()
  if (!username) {
    return null
  }
  return await kv.get<Article[]>(`unread:${username}`)
}

export async function setUnread(value: Article[]) {
  const username = await getSession()
  if (!username) {
    return null
  }
  return await kv.set(`unread:${username}`, value)
}
