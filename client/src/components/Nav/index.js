import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Nav/nav.css';

const index = () => {
    const [nav, setNav] = useState(false);
    const userClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#fffefe] text-black'>

            {/* Nav Menu */}
            <ul className='hidden md:flex nav-bar-menu mx-auto space-x-10'>
                <li className='nav-link'><a href='/'>Home</a></li>
                <li className='nav-link'><a href='/about'>About</a></li>
                <li className='nav-link'><a href='/contact'>Contact</a></li>
                <li className='nav-link'><a href='/shop'>Shop</a></li>
            </ul>

            {/* Nav Hamburger Menu */}
            <div onClick={userClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Nav Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fffefe] text-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'><a href='/'>Home</a></li>
                <li className='py-6 text-3xl'><a href='/about'>About</a></li>
                <li className='py-6 text-3xl'><a href='/contact'>Contact</a></li>
                <li className='py-6 text-3xl'><a href='/shop'>Shop</a></li>
            </ul>
        </div>
    )
}

export default index