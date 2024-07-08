import React from 'react'
import Navbar from "../components/Navbar";
import SearchbarSm from "../components/SearchbarSm";
import CartWidget from '../components/CartWidget';
import SubtotalWidget from '../components/SubtotalWidget';

type Props = {}

function page({}: Props) {
  return (
    <div>
    <main className="bg-white max-w-[1200px] mx-auto">
      <Navbar />
      <SearchbarSm />
      <div className='md:flex mt-5 p-5'>
      <CartWidget />
      <SubtotalWidget />
      </div>
    </main>
    </div>
  )
}

export default page