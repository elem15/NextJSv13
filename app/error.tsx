'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ErrorWrapper({ error }: { error: Error }) {
  const router = useRouter()
  const [counter, setCounter] = useState(5)
  useEffect(() => {
    let i = counter
    let interval = setInterval(() => {
      i--
      setCounter(i)
      if (i < 1) {
        clearInterval(interval)
        router.push('/')
      }
    }, 1000)
  }, [counter, router])
  return (
    <div className='not-found'>
      <h1>Oops... </h1>
      <h2>{error.message}</h2>
      <p>Go to <Link href='/'>Main page</Link> after {counter} s.</p>
    </div>
  )
}

