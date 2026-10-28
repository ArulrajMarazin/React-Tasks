import React from 'react'
import { Card1 } from './blogLists/Card1'
import { Card2 } from './blogLists/Card2'
import { Card3 } from './blogLists/card3'

function BlogPage() {
  return (
    <>
      <h1>Latest Blog Posts</h1>

      <Card1 />
      <hr />
      <Card2 />
      <hr />
      <Card3 />

    </>
  )
}

export default BlogPage