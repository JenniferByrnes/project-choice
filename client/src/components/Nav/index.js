import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../../assets/pc-horizontal-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const userClick = () => setNav(!nav);

  return (
    <header className="w-full bg-stone-200 text-black">
      <div className="container max-w-6xl mx-auto px-6 py-4">
        {/* Nav Menu */}
        <ul className="hidden md:flex items-center justify-around">
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
        <div onClick={userClick} className="md:hidden z-10 flex justify-between content-center ">
          <img
            className=""
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
              : "absolute top-0 left-0 w-full h-screen bg-pcGreen text-black flex flex-col justify-center items-center"
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
      </div>
    </header>
  );
};

export default Navbar;