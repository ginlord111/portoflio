import * as React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

import SideBar from './SideBar';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = React.useState<boolean>(true);
  const handleClick = () => setNav(nav => !nav);

  return (
    <div className="fixed w-screen md:w-full  h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-[800] border-b-2 border-black">
      <p className='text-xl md:text-2xl font-bold '>&lt;ron.dev/&gt;</p>
      <div>
        <ul className="hidden md:flex">
          <li className="nav-link"><a href="#home">Home</a></li>
          <li className="nav-link"><a href="#about">About</a></li>
          <li className="nav-link"><a href="#skills">Skills</a></li>
          <li className="nav-link"><a href="#work">Work</a></li>
          <li className="nav-link"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="md:hidden z-[80]" onClick={handleClick}>
        {nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul onClick={handleClick} className={nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen  flex-col justify-center items-center bg-[#0a192f] flex md:hidden"}>
        <li className="py-4 text-4xl" ><a href="#home">Home</a></li>
        <li className="py-4 text-4xl" ><a href="#about">About</a></li>
        <li className="py-4 text-4xl"  ><a href="#skills">Skills</a></li>
        <li className="py-4 text-4xl"  ><a href="#work">Work</a></li>
        <li className="py-4 text-4xl"  ><a href="#contact">Contact</a></li>
      </ul>
      <SideBar />
    </div>
  );
};

export default Navbar;
