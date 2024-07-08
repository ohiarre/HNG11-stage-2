import React from 'react'

type Props = {}

function PaymentButton({}: Props) {
  return (
    <button className='bg-black text-white px-2 py-2 w-40 text-center text-sm rounded-md'>
        <p>Proceed to Payment</p>
    </button>
  )
}

export default PaymentButton