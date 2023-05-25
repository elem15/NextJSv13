'use client'

import { usePosts } from '@/store'
import Link from 'next/link'
import { useEffect } from 'react'
import Preloader from './Preloader/page'
import { shallow } from 'zustand/shallow'

export default function Posts() {
  const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts], shallow)
  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])
  if (!posts.length) {
    return <h4>No posts founded</h4>
  }
  return (
    <>
      {
        loading ? (
          <Preloader />
        ) : (
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
        )
      }
    </>
  )
}
