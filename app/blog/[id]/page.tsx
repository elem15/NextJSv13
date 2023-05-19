import React from 'react'

type Props = {
  params: { id: string }
}

export default function blog({ params }: Props) {
  return (
    <div>blog {params.id}</div>
  )
}
