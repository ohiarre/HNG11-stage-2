import React from 'react'
import Navbar from "../components/Navbar";
import SearchbarSm from "../components/SearchbarSm";
import FormWidget from '../components/FormWidget';
import CheckoutSubtotal from '../components/CheckoutSubtotal';
import CheckoutBtn from '../components/CheckoutBtn';


type Props = {}

function page({}: Props) {
  return (
    <div>
    <main className="bg-white max-w-[1200px] mx-auto">
      <Navbar />
      <div className='md:flex'>
      <CheckoutSubtotal />
      <FormWidget />
      </div>
      <div>
          <CheckoutBtn />
      </div>
    </main>
    </div>
  )
}

export default page