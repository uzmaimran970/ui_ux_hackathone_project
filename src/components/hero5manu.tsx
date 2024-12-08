export default function StarterMenu() {
    return (
        <div className="w-full max-w-[1320px] bg-white flex flex-col lg:flex-row items-center mx-auto pt-[200px] pb-[100px] px-4">
            {/* Left Content */}
            <div className="mb-8 lg:mb-0 lg:mr-8">
                {/* Heading */}
                <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-8 text-center lg:text-left">Drinks</h1>

                {/* Menu Items */}
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="w-full lg:w-[769px] border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Caffè macchiato</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Deliciously grilled with a smoky flavor.</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">560 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-8">$32</p>
                    </div>

                    {/* Item 2 */}
                    <div className="w-full lg:w-[769px] border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Aperol Spritz Capacianno</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Served with a sesame-soy glaze.</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">420 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-8">$28</p>
                    </div>

                    {/* Item 3 */}
                    <div className="w-full lg:w-[769px] border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Caffe Latte Campuri</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Berries and creme tart</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">610 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-8">$35</p>
                    </div>

                    {/* Item 4 */}
                    <div className="w-full lg:w-[769px] border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Tormentoso BushTea Pintoage</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Fresh shrimp in garlic butter sauce.</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">490 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-8">$26</p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0 w-full max-w-[448px]">
                <img
                    src="/manu4.jpeg"
                    alt="Food Item"
                    className="object-cover w-full h-auto"
                />
            </div>
        </div>
    );
}