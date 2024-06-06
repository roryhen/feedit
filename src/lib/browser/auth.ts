export async function registerRequest() {
  const options = {
    attestation: 'none',
    authenticatorSelection: {
      authenticatorAttachment: 'platform',
      userVerification: 'required',
      requireResidentKey: false,
    },
  }
}

export async function registerCredential() {}
