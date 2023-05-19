import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/about'>About</Link>
      </header>
    </div>
  )
}
