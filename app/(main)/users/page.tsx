import BackButton from '@/components/BackButton'
import PostsPagination from '@/components/posts/PostsPagination'
import UserTable from '@/components/users/UserTable'
import React from 'react'

const page = () => {
  return (
    <div>
      <BackButton text='Go Back' link='/' />
      <UserTable/>
    </div>
  )
}

export default page
