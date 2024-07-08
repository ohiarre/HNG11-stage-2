import Image from 'next/image'
import React from 'react'
import Button from './Button'

type Props = {}

function Products({}: Props) {
  return (
    <div className='md:grid grid-cols-3 p-5 gap-4 space-y-3  mt-10'>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 114.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Gold Necklace <span className='pl-10'>$500</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 119.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Necklace <span className='pl-10'>$400</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 121.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Necklace<span className='pl-10'>$800</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 124.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Gold Bracelet<span className='pl-10'>$100</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 126.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Beads Bracelet<span className='pl-10'>$100</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 128.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Gold Ring<span className='pl-10'>$300</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 132.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Ring<span className='pl-10'>$1000</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 134.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Ring<span className='pl-10'>$2000</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 137.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Ring<span className='pl-10'>$5000</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 140.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Earring<span className='pl-10'>$100</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 142.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Earring <span className='pl-10'>$1000</span></h3>
    <Button />
    </div>
    <div className='space-y-3 p-5'>
        <Image
    src="/Frame 144.png"
    width={400}
    height={322}
    alt="Picture of the product"
    />
    <h3>Silver Earring <span className='pl-10'>$1000</span></h3>
    <Button />
    </div>
  </div>
  )
}

export default Products