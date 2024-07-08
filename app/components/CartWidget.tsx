import Image from 'next/image'
import React from 'react'

type Props = {}

function CartWidget({}: Props) {
  return (
        <div className='md:w-[700px]'>
        <h2 className='md:text-center font-bold p-5'>Your Cart</h2>
        <div className='flex justify-center items-center md:justify-start space-x-3 p-3'>
        <Image
    src="/Frame 126.png"
    width={100}
    height={100}
    alt="Picture of the product"
    />
    <div>
    <h3>Beads Bracelet</h3>
    <h2>1</h2>
    </div>
    <h3 className='pl-12'>$100</h3>
    </div>

    <div className='flex justify-center items-center md:justify-start space-x-3 p-3'>
        <Image
    src="/Frame 119.png"
    width={100}
    height={100}
    alt="Picture of the product"
    />
    <div>
    <h3>Silver Necklace</h3>
    <h2>1</h2>
    </div>
    <h3 className='pl-12'>$100</h3>
    </div>

    <div className='flex justify-center items-center md:justify-start space-x-3 p-3'>
        <Image
    src="/Frame 126.png"
    width={100}
    height={100}
    alt="Picture of the product"
    />
    <div>
    <h3>Gold Earring</h3>
    <h2>1</h2>
    </div>
    <h3 className='pl-12'>$100</h3>
    </div>
    </div>
  )
}

export default CartWidget