import { searchData } from '@/services/getPosts'
import { FormEventHandler, useState } from 'react'
type Props = {
  setPosts: (value: Post[]) => void
}
export default function Search({ setPosts }: Props) {
  const [value, setValue] = useState('')
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const posts = await searchData(value);
    setPosts(posts)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='search' onChange={(e) => setValue(e.target.value)} value={value} />
      <br />
      <input type="submit" value='Search' />
    </form>
  )
}