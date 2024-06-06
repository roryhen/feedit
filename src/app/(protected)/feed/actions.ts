'use server'

import { getFeeds, setFeeds } from '@/lib/server/feed-store'
import { revalidatePath } from 'next/cache'

export type UserKV = {
  id: string
  feeds: string[]
}

export async function addFeed(formData: FormData) {
  const url = formData.get('url')

  if (url && typeof url === 'string') {
    const feeds = await getFeeds()

    if (feeds?.includes(url)) {
      return null
    }

    setFeeds([...(feeds ?? []), url])

    return revalidatePath('/feed')
  }
}

export async function removeFeed(formData: FormData) {
  const feedId = formData.get('feedId')

  if (feedId && typeof feedId === 'string') {
    const feeds = await getFeeds()

    if (!feeds) {
      return null
    }

    setFeeds(feeds.filter((feed) => feed !== feedId))
    return revalidatePath('/feed')
  }
}
