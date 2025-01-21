import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import foodImage from "../../public/Image.svg";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white w-full h-auto pt-[100px] md:pt-[80px]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-8 lg:px-16">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left mt-8 md:mt-0 md:ml-[50px] lg:ml-[150px]">
          <h2
            className={`text-[#FF9F0D] text-lg font-semibold mb-2 ${greatVibes.className}`}
          >
            So Quick & Amazing!
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            The Art of Speed <br className="hidden md:block" /> Food Quality
          </h1>
          <p className="text-gray-300 mb-6 text-sm md:text-base lg:w-[418px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <Link href="/manu">
          <button className="bg-[#FF9F0D] text-black px-6 py-3 rounded-[30px] font-semibold hover:bg-yellow-600">
            See Menu
          </button></Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[50%] lg:w-[624.15px]">
          <Image
            src={foodImage}
            alt="Food Quality"
            className="rounded-lg mx-auto md:mx-0"
            width={624.15}
            height={633.15}
          />
        
          <div className="absolute hidden md:flex items-center justify-center w-full h-full">
            <div className="border-4 border-white rounded-full w-64 h-64 lg:w-96 lg:h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
