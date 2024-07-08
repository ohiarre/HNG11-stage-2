import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type Props = {}

function Searchbar({}: Props) {
  return (
    <div className='hidden md:flex bg-[#FAFBF6] w-[500px] h-90 rounded-md px-2 py-3'>
        <SearchOutlinedIcon />
        <input placeholder='Search...' className='bg-[#FAFBF6] focus:outline-none px-2'>
        </input>
    </div>
  )
}

export default Searchbar