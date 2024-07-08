import Image from 'next/image'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='p-5 md:flex justify-around items-center bg-black text-white md:h-[300px] mt-10'>
        <div>
          <Image
    src="/LOGO.png"
    width={120}
    height={90}
    alt="Picture of the author"
    className='mx-auto m-5'
  />
  </div>
  <div className='space-y-3 py-5'>
    <h2 className='uppercase'>Company Info</h2>
    <h3>Contact Us:</h3>
    <p>Email: Glam@gmail.com</p>
    <p>Phone Number: 07000000000</p>
  </div>
  <div className='space-y-3 py-5'>
  <h2 className='md:text-right uppercase'>Help</h2>
  <p>Exchange Policy</p>
  <p>Return Policy</p>
  </div>
        
    </div>
  )
}

export default Footer