'use client'

import { usePosts } from '@/store'
import { FormEventHandler, useState } from 'react'

export default function Search() {
  const getPostsBySearch = usePosts(state => state.getPostsBySearch)
  const [value, setValue] = useState('')
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await getPostsBySearch(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder='search' onChange={(e) => setValue(e.target.value)} value={value} />
      <br />
      <input type="submit" value='Search' />
    </form>
  )
}