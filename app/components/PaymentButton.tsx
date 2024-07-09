import Link from 'next/link';
import React from 'react';

type Props = {};

function PaymentButton({}: Props) {
  return (
    <Link href="/checkout" passHref>
      <button className='bg-black text-white px-2 py-2 my-5 w-40 text-center text-sm rounded-md'>
        <p>Proceed to Payment</p>
      </button>
    </Link>
  );
}

export default PaymentButton;
