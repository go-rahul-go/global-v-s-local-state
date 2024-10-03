import React from 'react'
import GlobalCounter from '../components/GlobalCounter';

const GlobalPage = () => {
  return (
    <div className='text-white p-4'>
      <h1 className='text-gray-300 text-3xl font-extrabold text-center py-6'>both components gets updated</h1>
      <GlobalCounter />
      <GlobalCounter/>
    </div>
  )
}

export default GlobalPage;