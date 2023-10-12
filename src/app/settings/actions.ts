'use server'

import { KEY_FEEDS, get, set } from '@/lib/store'
import { revalidatePath } from 'next/cache'

export type UserKV = {
  id: string
  feeds: string[]
}

export async function addFeed(formData: FormData) {
  const url = formData.get('url')

  if (url && typeof url === 'string') {
    const feeds = (await get(KEY_FEEDS)) as string[]

    if (feeds?.includes(url)) {
      return
    }

    set(KEY_FEEDS, [...(feeds ?? []), url])

    return revalidatePath('/settings')
  }
}

export async function removeFeed(formData: FormData) {
  const feedId = formData.get('feedId')

  if (feedId && typeof feedId === 'string') {
    const feeds = (await get(KEY_FEEDS)) as string[]
    set(KEY_FEEDS, feeds?.filter((feed) => feed !== feedId))

    return revalidatePath('/settings')
  }
}
