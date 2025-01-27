import React from 'react';
import Image from 'next/image';

const Heading = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="bg-black px-4 sm:px-10 lg:px-[300px] py-4">
        <h2
          className="text-[24px] sm:text-[28px] lg:text-[32px] leading-8 sm:leading-9 lg:leading-10 text-[#FF9F0D] text-left"
          style={{ fontFamily: 'Great Vibes, cursive' }}
        >
          Testimonials
        </h2>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mt-2 text-left text-white">
          What our clients are saying
        </h1>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center px-4 py-[50px] sm:py-[80px] lg:py-[100px] bg-black relative">
        <div className="mt-8 w-full sm:w-[90%] lg:w-[869px] h-auto sm:h-auto bg-white shadow-lg rounded-lg flex flex-col items-center relative pt-[20px]">
          {/* Client Image */}
          <div className="absolute -top-12">
            <Image
              src="/tsetimonals.svg"
              alt="Client Image"
              width={133}
              height={134}
              className="rounded-full"
            />
          </div>

          {/* Smaller Image */}
          <div className="mt-20">
            <Image
              src="/coma.svg"
              alt="Small Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>

          {/* Demo Text */}
          <p className="mt-4 text-center text-gray-700 px-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit. adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit.
          </p>

          {/* Bottom Image */}
          <div className="mt-6">
            <Image
              src="/star.svg"
              alt="Client Logo"
              width={152}
              height={24}
            />
          </div>

          {/* Name and Role */}
          <h3 className="mt-4 text-lg sm:text-xl font-bold">John Doe</h3>
          <p className="text-gray-500 text-xs sm:text-sm">CEO, Example Company</p>
        </div>

        {/* Background Image */}
        <div className="absolute w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[250px] lg:h-[300px] right-[10%] sm:right-[15%] lg:right-[230px] bottom-[5px] opacity-50">
          <Image
            src="/pholbg.svg"
            alt="Background Design"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
