import React from 'react'

type Props = {}

function Listings({}: Props) {
  return (
    <div className='flex justify-between items-center mt-10 p-10 text-sm font-bold px-5'>
        <h2>NEW</h2>
        <h2>CHAINS</h2> 
        <h2>EARRINGS</h2>
        <h2>NECKLACES</h2>
        <h2>RINGS</h2>
        <h2>BRACELETS</h2>
    </div>
  )
}

export default Listings