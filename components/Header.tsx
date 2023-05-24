import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' }
]
export default function Header() {
  return (
    <div>
      <header>
        <Navigation navLinks={navItems} />
      </header>
    </div>
  )
}
