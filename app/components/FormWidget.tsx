import React from 'react'

type Props = {}

function FormWidget({}: Props) {
  return (
    <div className='md:order-1 md:w-[700px] mt-10'>
        <form className='flex flex-col justify-center md:justify-start space-x-3 space-y-5 p-3 py-5'>
            <section className='bg-[#FAFBF6] p-5 rounded-md mb-7'>
            <label htmlFor="country">
            <h2>DELIVERY COUNTRY:</h2>
            <select className="p-2 focus:outline-none bg-white" id="country" name="country">
                <option value="ng">Nigeria</option>
                <option value="ca">Canada</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="jp">Japan</option>
                <option value="cn">China</option>
                <option value="in">India</option>
                <option value="br">Brazil</option>
                <option value="za">South Africa</option>
                {/* Add more countries as needed */}
            </select>
            </label>
            </section>

            <section className='bg-[#FAFBF6] w-[250px] p-5 rounded-md'>
            <label htmlFor="email" className='py-'>
                <h3>EMAIL ADDRESS</h3>
                <input className="text-black font-extralight text-xs focus:outline-none p-2 w-[200px]" type="email" id="email" name="email" placeholder='rihana@gmail.com'required />
            </label>
            </section>

            <section className='bg-[#FAFBF6] p-5 rounded-md'>
  <h2>DELIVERY DETAILS</h2>
  
  <label htmlFor="firstName" className='block py-2'>
    <h3>FIRST NAME</h3>
    <input className="text-black font-extralight text-xs focus:outline-none p-2 w-[300px] rounded-md" type="text" id="firstName" name="firstName" placeholder='Enter your first name' required />
  </label>

  <label htmlFor="lastName" className='block py-2'>
    <h3>LAST NAME</h3>
    <input className="text-black font-extralight text-xs focus:outline-none p-2 w-[300px] rounded-md" type="text" id="lastName" name="lastName" placeholder='Enter your last name' required />
  </label>

  <label htmlFor="address" className='block py-2'>
    <h3>ADDRESS</h3>
    <input className="text-black font-extralight text-xs focus:outline-none p-2 w-[300px] rounded-md" type="text" id="address" name="address" placeholder='Enter your address' required />
  </label>
</section>

        </form>
    </div>    
  )
}

export default FormWidget