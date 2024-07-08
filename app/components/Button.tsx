import React from 'react'

type Props = {}

function Button({}: Props) {
  return (
    <button className='bg-black text-white px-2 py-3 w-40 text-center text-sm'>
        <p>Add to Cart</p>
    </button>
  )
}

export default Button