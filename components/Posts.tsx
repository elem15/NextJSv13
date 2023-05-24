import Link from 'next/link'

export default function Posts({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return <h4>No posts founded</h4>
  }
  return (
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