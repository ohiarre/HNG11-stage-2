import Image from 'next/image'
import React from 'react'
import Searchbar from "../components/Searchbar";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';

type Props = {}

export default function navbar({}: Props) {
  return (
    <div className='flex justify-between items-center p-5 mt-10'>
       
    <Link href='/'>
         <Image
      src="/LOGO.png"
      width={120}
      height={90}
      alt="Picture of the author"
    />
    </Link>
    <Searchbar />
   
    <Link href='/cart'>
    <ShoppingCartOutlinedIcon  />
    </Link>
      

    </div>
  )
}