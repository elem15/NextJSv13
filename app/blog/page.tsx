import Posts from '@/components/Posts'
import Search from '@/components/Search'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'blog | Next App'
}

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Search />
      <Posts />
    </div>
  )
}
