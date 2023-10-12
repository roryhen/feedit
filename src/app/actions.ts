'use server'

import { KEY_USERNAME, del, get, set } from '@/lib/store'

export async function login(formData: FormData) {
  const username = formData.get('username')

  if (username && typeof username === 'string') {
    set(KEY_USERNAME, username)
  }
}

export async function logout() {
  const username = get(KEY_USERNAME)

  if (username) {
    del(KEY_USERNAME)
  }
}
