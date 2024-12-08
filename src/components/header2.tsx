import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

export default function Header2() {
  return (
    <div className="flex justify-center w-full bg-black text-white">
      {/* Parent Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full lg:w-[1320px] h-auto lg:h-[562px] p-6 lg:p-0">
        {/* Left Side */}
        <div className="w-full lg:w-[562px] text-center lg:text-left mb-8 lg:mb-0">
          <h1
            className={`text-[28px] md:text-[32px] text-[#FF9F0D] ${greatVibes.className}`}
          >
            About Us
          </h1>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[56px] w-full lg:w-[446px] mt-6">
            <span className="text-[#FF9F0D]">We</span> Create the best foody
            product
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] w-full lg:w-[526px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            lacus nisi. Aenean nec dapibus mauris. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin nec lacus nisi. Aenean nec
            dapibus mauris.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <p className="flex items-center text-[16px] md:text-[18px] leading-[22px] md:leading-[26px]">
              <span className="mr-2">✔</span> Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <p className="flex items-center text-[16px] md:text-[18px] leading-[22px] md:leading-[26px]">
              <span className="mr-2">✔</span> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p className="flex items-center text-[16px] md:text-[18px] leading-[22px] md:leading-[26px]">
              <span className="mr-2">✔</span> Proin nec lacus nisi. Aenean nec
              dapibus mauris.
            </p>
          </div>
          <button className="bg-[#ff9f0d] text-white rounded-[30px] w-[160px] md:w-[190px] h-[50px] md:h-[60px] mt-6">
            Read More
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 w-full lg:w-[660px]">
          <Image
            src="/egg.svg"
            alt="Main Image"
            width={660}
            height={330}
            className="w-full lg:w-[660px] h-[200px] md:h-[300px] lg:h-[330px] object-cover"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src="/bread.svg"
              alt="Second Image"
              width={322}
              height={194}
              className="w-full md:w-[48%] lg:w-[322px] h-[150px] md:h-[180px] lg:h-[194px] object-cover"
            />
            <Image
              src="/bread2.svg"
              alt="Third Image"
              width={322}
              height={194}
              className="w-full md:w-[48%] lg:w-[322px] h-[150px] md:h-[180px] lg:h-[194px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
