import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from "framer-motion";
import '../Nav/nav.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const userClick = () => setNav(!nav);

    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#dae8e3] text-black'
    > 

            {/* Nav Menu */}
            <ul className='hidden md:flex nav-bar-menu mx-auto space-x-20'>
                <li className='nav-link'><a href='/'>Home</a></li>
                <li className='nav-link'><a href='/about'>About</a></li>
                <li className='nav-link'><a href='/contact'>Contact</a></li>
                <li className='nav-link'><a href='/shop'>Shop</a></li>
                <li className='nav-link'><a href='/login'>Login</a></li>
                <li className='nav-link'><a href='/signup'>Sign Up</a></li>
            </ul>

            {/* Nav Hamburger Menu */}
            <div onClick={userClick} className='md:hidden z-10 justify-items-end'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Nav Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#dae8e3] text-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'><a href='/'>Home</a></li>
                <li className='py-6 text-3xl'><a href='/about'>About</a></li>
                <li className='py-6 text-3xl'><a href='/contact'>Contact</a></li>
                <li className='py-6 text-3xl'><a href='/shop'>Shop</a></li>
                <li className='py-6 text-3xl'><a href='/login'>Login</a></li>
                <li className='py-6 text-3xl'><a href='/signup'>Sign Up</a></li>
            </ul>
        </motion.div>
    )
}

export default Navbar