import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type Props = {}

function Searchbar({}: Props) {
  return (
    <div className='md:hidden mx-auto bg-[#FAFBF6] mt-10 p-2 w-[300px] rounded-md '>
        <SearchOutlinedIcon />
        <input placeholder='Search...' className='bg-[#FAFBF6] focus:outline-none px-2'>
        </input>
    </div>
  )
}

export default Searchbar