'use server'

import { deleteSession, setSession } from '@/lib/server/session-store'
import { redirect } from 'next/navigation'

// idea: public urls for feeds so they can be shared instead of logging in
export async function login(formData: FormData) {
  const username = formData.get('email')

  if (username && typeof username === 'string') {
    setSession(username)
    redirect('/')
  }
}

export async function logout() {
  deleteSession()
}
