import { Metadata } from 'next'
import Link from 'next/link'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function getData(): Promise<Post[]> {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts',
    { next: { revalidate: 60 } })
  return data.json()
}

export const metadata: Metadata = {
  title: 'blog | Next App'
}

export default async function Blog() {
  const posts = await getData()
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
