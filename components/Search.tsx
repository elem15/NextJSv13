'use client'

import { searchData } from '@/services/getPosts'
import { FormEventHandler, useState } from 'react'
import useSWR from 'swr'

export default function Search() {
  // const getPostsBySearch = usePosts(state => state.getPostsBySearch)
  const { mutate } = useSWR('posts')
  const [value, setValue] = useState('')
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // await getPostsBySearch(value);
    mutate(searchData(value))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder='search' onChange={(e) => setValue(e.target.value)} value={value} />
      <br />
      <input type="submit" value='Search' />
    </form>
  )
}