import { generateRegistrationOptions } from '@simplewebauthn/server'

type UserModel = {
  id: string
  username: string
  currentChallenge?: string
}

type CredentialDeviceType = 'singleDevice' | 'multiDevice'

type Authenticator = {
  credentialID: Uint8Array
  credentialPublicKey: Uint8Array
  counter: number
  credentialDeviceType: CredentialDeviceType
  credentialBackedUp: boolean
  transports?: AuthenticatorTransport[]
}

const RP_NAME = 'Feedit WebAuthn'
const RP_ID = 'feedit.vercel.app'
const ORIGIN = `https://${RP_ID}`

export function getUserAuthenticators(user: UserModel) {
  return []
}

export async function getRegistration(user: string) {
  const userAuthenticators: Authenticator[] = getUserAuthenticators(user)

  const options = await generateRegistrationOptions({
    rpName: RP_NAME,
    rpID: RP_ID,
    userID: user.id,
    userName: user.username,
    attestationType: 'none',
    excludeCredentials: userAuthenticators.map((authenticator) => ({
      id: authenticator.credentialID,
      type: 'public-key',
      transports: authenticator.transports,
    })),
  })
}
