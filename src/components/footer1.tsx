// pages/index.js
export default function SupportSection() {
    return (
      <div className="flex justify-center items-center bg-black">
        <div className="w-full max-w-[1170px] h-[142.6px] bg-black text-center relative">
          {/* Left Content (Text) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-8 hidden sm:block">
            <p className="text-[#FF9F0D] text-[32px] font-bold w-[439px]">
              Still you need our support?
            </p>
            <p className="text-white text-[16px] mt-1">
              Dont wait, make a smart & logical choice here. Its pretty easy.
            </p>
          </div>
  
          {/* Right Content (Search Bar) */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 sm:pr-8 flex items-center w-full sm:w-auto">
            <div className="w-full sm:w-[459px] h-[48px] sm:h-[56px] flex rounded-lg">
              <input
                type="text"
                placeholder="Enter your text"
                className="w-full sm:w-1/2 h-full bg-[#FF9F0D] text-white text-sm sm:text-base pl-3 sm:pl-4 rounded-l-lg"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full sm:w-1/2 h-full bg-white text-black text-sm sm:text-base pl-3 sm:pl-4 rounded-r-lg"
              />
            </div>
          </div>
  
          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }
  