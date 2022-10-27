import React from "react";
import "./shop.css";

function Shop() {
  return (
    <div name='technical-skills' className='w-full h-screen bg-[#2b2b2b] text-[#f8f9fa]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='text-center'>
            <h2 className='text-4xl inline border-b-4 border-[#9381ff] py-2'>Shop</h2>
          </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-x-1 gap-y-8 text-center py-8'>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' alt='Pro Choice Hoodie logo' />
            <p className='my-4'>Pro Choice Hoodie</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' alt='Beanie logo' />
            <p className='my-4'>Beanie</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' alt='My Choice Mug logo' />
            <p className='my-4'>My Choice Mug</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto'  alt='My Body T White logo' />
            <p className='my-4'>My Body T White</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto'  alt='My Body Hoodie logo' />
            <p className='my-4'>My Body Hoodie</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto hover:invert'  alt='Pro Choice Mug logo' />
            <p className='my-4'>Pro Choice Mug</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto'  alt='Pro Choice Water Bottle logo' />
            <p className='my-4'>Pro Choice Water Bottle</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto'  alt='My Body T Pink logo' />
            <p className='my-4'>My Body T Pink</p>
          </div>
          <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto hover:invert'  alt='Pro Choice Keychain logo' />
            <p className='my-4'>Pro Choice Keychain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop;