import Image from 'next/image';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});
export default function FoodCategory() {
  return (
    <div
    className="w-full h-screen flex flex-col items-center justify-center bg-black bg-no-repeat pt-[400px] md:pt-0 pb-[450px] md:pb-0"

      style={{ 
        backgroundImage: "url('/bg_catogary.svg')", 
        backgroundSize: '444px 532px',  
        backgroundPosition: 'right' 
    
      }}
    >
      <h1 className={`text-[24px] md:text-[32px] font-normal leading-[30px] md:leading-[40px] text-[#FF9F0D] ${greatVibes.className}`}>
        Food Category
      </h1>
      <h2 className="text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-white text-center">
        <span className="text-[#FF9F0D]">Ch</span>oose Food Items
      </h2>
      <div className="w-full lg:w-[1320px] h-auto mt-12 md:mt-16 lg:mt-16 flex flex-wrap justify-center lg:justify-between gap-4">
        {/* Food Item 1 */}
        <div className="w-[150px] h-[164px] md:w-[200px] md:h-[220px] lg:w-[305px] lg:h-[328px] flex items-center justify-center ">
          <Image
            src="/cat1.svg" 
            alt="Food Item 1"
            width={305}
            height={328}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 2 */}
        <div className="w-[150px] h-[164px] md:w-[200px] md:h-[220px] lg:w-[305px] lg:h-[328px] flex items-center justify-center">
          <Image
            src="/cat2.svg" 
            alt="Food Item 2"
            width={305}
            height={328}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 3 */}
        <div className="w-[150px] h-[164px] md:w-[200px] md:h-[220px] lg:w-[305px] lg:h-[328px] flex items-center justify-center">
          <Image
            src="/cat3.svg"
            alt="Food Item 3"
            width={305}
            height={328}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 4 */}
        <div className="w-[150px] h-[164px] md:w-[200px] md:h-[220px] lg:w-[305px] lg:h-[328px] flex items-center justify-center">
          <Image
            src="/cat4.svg"
            alt="Food Item 4"
            width={305}
            height={328}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
