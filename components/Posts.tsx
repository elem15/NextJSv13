'use client'

import Link from 'next/link'
import Preloader from './Preloader/page'
import useSWR from 'swr'
import { getData } from '@/services/getPosts'

export default function Posts() {
  // const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts], shallow)
  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts])
  const { data, isLoading } = useSWR('posts', getData)
  const posts = data as Post[]
  if (!isLoading && !posts.length) {
    return <h4>No posts founded</h4>
  }
  return (
    <>
      {
        isLoading ? (
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
