export default function StarterMenu() {
    return (
      <div className="w-full max-w-[1320px] h-auto bg-white flex flex-col lg:flex-row items-center mx-auto pt-[60px] lg:pt-[180px] px-4">
        {/* Left Image */}
        <div className="relative flex-shrink-0 pt-[40px] lg:pt-[100px]">
          <img
            src="/hero2.svg"
            alt="Food Item"
            width={448}
            height={626}
            className="object-cover w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
          />
        </div>
  
        {/* Right Content */}
        <div className="lg:ml-8 pt-[40px] lg:pt-[100px]">
          {/* Heading */}
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-6 lg:mb-8 text-center lg:text-left">
            Starter Menu
          </h1>
  
          {/* Menu Items */}
          <div className="space-y-4">
            
            <div className="w-full lg:w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                  Alder Grilled Chinook Salmon
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                  Deliciously grilled with a smoky flavor.
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">560 CAL</p>
              </div>
              <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0">
                $32
              </p>
            </div>
  
            {/* Item 2 */}
            <div className="w-full lg:w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold text-[#FF9F0D]">
                  Berries and creme tart
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                  Served with a sesame-soy glaze.
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">420 CAL</p>
              </div>
              <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0">
                $28
              </p>
            </div>
  
            {/* Item 3 */}
            <div className="w-full lg:w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                  Herb Crusted Lamb Chops
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                  Berries and creme tart
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">610 CAL</p>
              </div>
              <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0">
                $35
              </p>
            </div>
  
            {/* Item 4 */}
            <div className="w-full lg:w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">
                  Garlic Butter Shrimp
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                  Fresh shrimp in garlic butter sauce.
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">490 CAL</p>
              </div>
              <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0">
                $26
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  