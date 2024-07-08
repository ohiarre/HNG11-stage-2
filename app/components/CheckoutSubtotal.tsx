import React from 'react'


type Props = {}

function CheckoutSubtotal({}: Props) {
  return (
    <div className='md:order-2 flex flex-col justify-center md:w-[500px] p-5 mt-5'>
        <div className='bg-[#FAFBF6] rounded-md p-5 space-y-5 '>
        <h3 className='font-bold pb-4'>Order</h3>
        <h3>Beaded Bracelet <span className='float-right'>$100</span></h3>
        <h3>Silver Necklace <span className='float-right'>$800</span></h3>
        <h3>Gold Earring <span className='float-right'>$1000</span></h3>
        <h3>Shipping <span className='float-right'>Free</span></h3>
        <h3  className='font-bold pt-4'>Total <span className='float-right'>$1900</span></h3>
        </div>
    </div>
  )
}

export default CheckoutSubtotal