import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="fixed w-full bg-[#009242] z-50">
        <div className="container h-14 sm:h-16 flex justify-between items-center">
          <Link
            to="/"
            className="text-white font-Poppins text-lg sm:text-xl md:text-2xl"
          >
            Spoonacular API
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
