import React from 'react';
import Link from 'next/link';

type Props = {};

function Listings({}: Props) {
  return (
    <div className="mt-10 p-5 text-base md:text-lg font-bold">
      <ul className="flex flex-wrap justify-between items-center space-x-3 list-none p-0 m-0">
        <li className='p-2'>
          <Link href="/new" passHref>
            <div className="cursor-pointer focus:outline-none">NEW</div>
          </Link>
        </li>
        <li className='p-2'>
          <Link href="/chains" passHref>
            <div className="cursor-pointer focus:outline-none">CHAINS</div>
          </Link>
        </li>
        <li className='p-2'>
          <Link href="/earrings" passHref>
            <div className="cursor-pointer focus:outline-none">EARRINGS</div>
          </Link>
        </li>
        <li className='p-2'>
          <Link href="/necklaces" passHref>
            <div className="cursor-pointer focus:outline-none">NECKLACES</div>
          </Link>
        </li>
        <li className='p-2'>
          <Link href="/rings" passHref>
            <div className="cursor-pointer focus:outline-none">RINGS</div>
          </Link>
        </li>
        <li className='p-2'>
          <Link href="/bracelets" passHref>
            <div className="cursor-pointer focus:outline-none">BRACELETS</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Listings;
