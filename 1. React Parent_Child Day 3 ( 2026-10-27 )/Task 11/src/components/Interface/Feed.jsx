import React from 'react'
import { PostList } from './PostList'
import { FriendList } from './FriendList'

export const Feed = () => {
  return (
    <>
      <PostList />
      <FriendList />
    </>
  )
}
