import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Nav/nav.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const userClick = () => setNav(!nav);

  return (
    <header className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-stone-200 text-black">

      {/* Nav Menu */}
      <ul className="hidden md:flex nav-bar-menu mx-auto space-x-20">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-link">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-link">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-link">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>

      {/* Nav Hamburger Menu */}
      <div onClick={userClick} className="md:hidden z-10 justify-items-end">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#dae8e3] text-black flex flex-col justify-center items-center"
        }
      >
        <li className="nav-link py-6 text-3xl">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link py-6 text-3xl">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link py-6 text-3xl">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-link py-6 text-3xl">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-link py-6 text-3xl">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-link py-6 text-3xl">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;