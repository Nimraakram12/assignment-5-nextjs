import React from 'react';
import { Rye } from 'next/font/google';
import { CiHeart, CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";

const rye = Rye({
    subsets: ['latin'],
    weight: '400'
});

const Header = () => {
  return (
    <div className="w-full bg-[#A29875] flex flex-col items-center md:flex-row md:justify-between px-4 md:px-12 py-4 md:py-6">
      {/* Brand Name */}
      <p className={`${rye.className} text-[36px] md:text-[50px] lg:text-[75px] leading-tight text-center md:text-left text-white`}>
        MANZZARI
      </p>

      {/* Centered Search Bar and Icons */}
      <div className="flex flex-col md:flex-1 md:flex-row md:items-center w-full md:justify-center mt-4 md:mt-0">
        <div className="relative w-full md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <input
            type="search"
            placeholder="Search for Gold jewellery, Diamond jewellery and more..."
            className="w-full h-[36px] md:h-[40px] lg:h-[50px] rounded-md pl-4 pr-10 bg-white outline-none mb-4 md:mb-0"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Icons on the Right Side */}
      <div className="flex items-center space-x-4 text-white text-xl md:text-2xl lg:text-3xl mt-4 md:mt-0">
        <CiHeart />
        <CiUser />
        <CiShoppingCart />
      </div>
    </div>
  );
};

export default Header;

