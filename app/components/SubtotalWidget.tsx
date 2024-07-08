import React from 'react'
import PaymentButton from './PaymentButton'

type Props = {}

function SubtotalWidget({}: Props) {
  return (
    <div className='flex flex-col justify-center p-3 md:w-[500px]'>
        <h2 className='font-medium text-center py-5'>Subtotal</h2>
        <div className='space-y-5'>
        <h3  className='font-bold pb-4'>Order</h3>
        <h3>Beaded Bracelet <span className='float-right'>$100</span></h3>
        <h3>Silver Necklace <span className='float-right'>$800</span></h3>
        <h3>Gold Earring <span className='float-right'>$1000</span></h3>
        <h3>Shipping <span className='float-right'>Free</span></h3>
        <h3  className='font-bold py-4'>Total <span className='float-right'>$1900</span></h3>
        </div>
        <PaymentButton />
    </div>
  )
}

export default SubtotalWidget