import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/pc-horizontal-logo.png";

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
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        {/* Mobile Hamburger Header */}
        <div onClick={userClick} className="md:hidden z-10 flex justify-between items-center hover:text-pcCoral hover:text-xl">
          <img
            src={Logo}
            style={{ width: "200px", height: "50px" }}
            alt="cover"
          />
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Nav Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "top-0 bottom-0 left-0 flex-col w-full py-5 text-lg text-center"
          }
        >
          <li className="hover:text-pcCoral hover:text-xl" >
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pcCoral hover:text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-pcCoral hover:text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-pcCoral hover:text-xl">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-pcCoral hover:text-xl">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-pcCoral hover:text-xl">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;