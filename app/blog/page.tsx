'use client'
import Posts from '@/components/Posts'
import Preloader from '@/components/Preloader/page'
import Search from '@/components/Search'
import { getData } from '@/services/getPosts'
import { Metadata } from 'next'
import { useEffect, useState } from 'react'


export const metadata: Metadata = {
  title: 'blog | Next App'
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getData()
      .then(posts => {
        setPosts(posts)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1>Blog</h1>
      <Search setPosts={setPosts} />
      {
        loading ? (
          <Preloader />
        ) : (
          <Posts posts={posts} />
        )
      }

    </div>
  )
}
