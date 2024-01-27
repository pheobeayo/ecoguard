import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Subfooter from "../components/subfooter/index";

const Layout = ({ children }) => {
  return (
    <div className='relative'>
       <header className='w-full bg-[#1A1818]'>
       <Navbar/>
       </header>
      <div>
        <main className="">{children}</main>
      </div>
      <footer>
        <Subfooter/>
      </footer>
    </div>
  );
};

export default Layout;
