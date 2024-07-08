import React from 'react'
import Navbar from "../components/Navbar";
import SearchbarSm from "../components/SearchbarSm";
import FormWidget from '../components/FormWidget';
import CheckoutSubtotal from '../components/CheckoutSubtotal';


type Props = {}

function page({}: Props) {
  return (
    <div>
    <main className="bg-white max-w-[1200px] mx-auto">
      <Navbar />
      <SearchbarSm />
      <div className='md:flex'>
      <CheckoutSubtotal />
      <FormWidget />
      </div>
    </main>
    </div>
  )
}

export default page