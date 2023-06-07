'use client'

import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react'

export default function EmailSignIn() {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const res = await signIn('credentials', { email: formData.get('email'), password: formData.get('password'), redirect: false })
    if (res && !res.error) {
      router.push('/')
    } else {
      console.log(res)
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="email" placeholder='email' name='email' />
      <input type="password" placeholder='password' name="password" />
      <button type='submit'>Sign In</button>
    </form>
  )
}