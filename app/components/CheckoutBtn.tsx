import Link from 'next/link';
import React from 'react';

type Props = {};

function CheckoutBtn({}: Props) {
  return (
    <Link href="/" passHref>
      <button className='bg-black text-white m-5 px-2 py-2 w-40 text-center text-sm rounded-md'>
        <p>Checkout</p>
      </button>
    </Link>
  );
}

export default CheckoutBtn;
