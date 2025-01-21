import Image from 'next/image';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

export default function OurTeam() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-black bg-no-repeat pt-[1200px] sm:pt-[1400px] md:pt-[200px] pb-[1400px] md:pb-[300px]"


      style={{
        backgroundImage: "url('/leaf.svg')",
        backgroundSize: '444px 532px',
        backgroundPosition: 'left 100%'
      }}
    >
      <h1 className={`text-[32px] font-normal leading-[40px] text-[#FF9F0D] ${greatVibes.className} sm:text-[24px] md:text-[28px]`}>
        shefs
      </h1>
      <h2 className="text-[48px] font-bold leading-[56px] text-white sm:text-[36px] md:text-[40px]">
        <span className="text-[#FF9F0D]">Me</span>et our shefs
      </h2>
      <div className="w-full h-[329px] mt-8 flex flex-wrap justify-between sm:w-full sm:px-4 md:w-full md:px-8 lg:w-[1320px] lg:h-[329px] pt-[40px]">
        
        {/* Food Item 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[305px] h-[328px] flex items-center justify-center mb-4 sm:mb-4 md:mb-6">
          <Image
            src="/shef1.svg"
            alt="Food Item 1"
            width={305}
            height={328}
            className="object-cover"
          />
        </div>

        {/* Food Item 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[305px] h-[328px] flex items-center justify-center mb-4 sm:mb-4 md:mb-6">
          <Image
            src="/shef2.svg"
            alt="Food Item 2"
            width={305}
            height={328}
            className="object-cover"
          />
        </div>

        {/* Food Item 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[305px] h-[328px] flex items-center justify-center mb-4 sm:mb-4 md:mb-6">
          <Image
            src="/shef3.svg"
            alt="Food Item 3"
            width={305}
            height={328}
            className="object-cover"
          />
        </div>

        {/* Food Item 4 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[305px] h-[328px] flex items-center justify-center">
          <Image
            src="/shef4.svg"
            alt="Food Item 4"
            width={305}
            height={328}
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
