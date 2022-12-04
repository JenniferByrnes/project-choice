import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/pc-horizontal-logo.png";
import './nav.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const userClick = () => setNav(!nav);

  return (
    <header className="w-full bg-stone-200 text-black">
      <div className="container max-w-6xl mx-auto px-6 py-2">
        {/* Nav Menu */}
        <ul className="hidden md:flex items-center justify-around py-4">
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>

        {/* Mobile Hamburger Header */}
        <div onClick={userClick} className="md:hidden z-10 flex justify-between items-center hover:text-pcCoral hover:text-xl">
          {/* This is the logo on the left */}
          <img
            src={Logo}
            style={{ width: "200px", height: "50px" }}
            alt="cover"
          />
          {/* This is the hamburger or giant X as needed */}
          {!nav ?
            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
            :
            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none open"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          }
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "top-0 bottom-0 left-0 flex py-5 text-lg text-center justify-evenly"
          }
        >
          <div className="flex flex-col items-start">
            <Link to="/" className="hover:text-pcCoral hover:text-xl" >Home</Link>
            <Link to="/about" className="hover:text-pcCoral hover:text-xl" >About</Link>
            <Link to="/contact" className="hover:text-pcCoral hover:text-xl" >Contact</Link>
          </div>
          <div className="flex flex-col items-start">
            <Link to="/shop" className="hover:text-pcCoral hover:text-xl" >Shop</Link>
            <Link to="/login" className="hover:text-pcCoral hover:text-xl" >Login</Link>
            <Link to="/signup" className="hover:text-pcCoral hover:text-xl" >Sign Up</Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;