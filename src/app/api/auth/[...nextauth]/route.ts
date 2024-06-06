import NextAuth, { type NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter'
import { createClient } from '@vercel/kv'

const redisKV = createClient({
  url: process.env.USERS_REST_API_URL ?? '',
  token: process.env.USERS_REST_API_TOKEN ?? '',
})

export const authOptions: NextAuthOptions = {
  // @ts-expect-error
  adapter: UpstashRedisAdapter(redisKV),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    // signIn: '/login',
  },
  // debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)

export function authSession() {
  return getServerSession(authOptions)
}

export { handler as GET, handler as POST }
