import React from 'react';

const Heading = () => {
  return (
    <div className="bg-black px-4 sm:px-10 lg:px-[300px] py-2">
      <h2
        className="text-[24px] sm:text-[28px] lg:text-[32px] leading-8 sm:leading-9 lg:leading-10 text-[#FF9F0D] text-left"
        style={{ fontFamily: 'Great Vibes, cursive' }}
      >
        Testimonials
      </h2>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-left text-white">
        What our clients are saying
      </h1>
    </div>
  );
};

export default Heading;
