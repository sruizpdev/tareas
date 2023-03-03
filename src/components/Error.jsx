import React from 'react'

const Error = ({msg}) => {
  return (
    <h1 className='font-bold text-white py-3 px-3 w-full bg-red-500 rounded-md text-center mb-3'>{msg}</h1>
  )
}

export default Error