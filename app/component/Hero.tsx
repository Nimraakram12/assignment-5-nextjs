import React from 'react';
import Image from 'next/image';
import { Libre_Bodoni } from 'next/font/google';

const libre_Bodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: '400'
});

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:h-[700px] px-4 md:px-8 lg:px-16">
      {/* Left Text Section */}
      <div className={`${libre_Bodoni.className} w-full lg:w-1/2 text-center lg:text-left p-4 md:p-8 lg:p-[90px]`}>
        <h1 className="text-[28px] md:text-[36px] lg:text-[50px] tracking-wider font-bold leading-tight text-[#A29875] mb-4">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>

        <p className="text-[18px] md:text-[22px] lg:text-[29px] text-[#787054] font-medium text-justify">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>

        <button className="w-full md:w-[200px] lg:w-[288px] h-[48px] md:h-[58px] bg-[#A29875] mt-6 text-white text-center text-[18px] md:text-[22px] lg:text-[25px] py-2">
          Explore Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <Image src={"/images/hero.svg"} alt="Hero Image" width={462} height={647} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
