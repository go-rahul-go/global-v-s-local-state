import React from 'react'
import LocalCounter from '../components/LocalCounter'

const LocalPage = () => {
  return (
    <div className='text-white p-5'>
<h1 className='text-gray-300 text-3xl font-extrabold text-center py-6'>only one component gets updated</h1>
      <LocalCounter />
      <LocalCounter />
    </div>
  )
}

export default LocalPage