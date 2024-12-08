export default function StarterMenu() {
    return (
        <div className="w-full max-w-[1320px] h-auto bg-white flex flex-col lg:flex-row items-center mx-auto pt-[150px] lg:pt-[100px] pb-[100px] px-4">
            {/* Left Content */}
            <div className="lg:mr-8 pt-[100px] lg:pt-[100px] px-4">
                {/* Heading */}
                <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-8 text-center lg:text-left">Main Course</h1>

                {/* Menu Items */}
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="w-full max-w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Optic Big Breakfast Combo Menu</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Deliciously grilled with a smoky flavor.</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">560 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-16">$32</p>
                    </div>

                    {/* Item 2 */}
                    <div className="w-full max-w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Cashew Chicken With Stir-Fry</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Served with a sesame-soy glaze.</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">420 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-16">$28</p>
                    </div>

                    {/* Item 3 */}
                    <div className="w-full max-w-[769px] h-auto border-b p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Cashew Chicken With Stir-Fry</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Berries and creme tart</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">610 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-16">$35</p>
                    </div>

                    {/* Item 4 */}
                    <div className="w-full max-w-[769px] h-auto border-b-2 p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                        <div>
                            <h2 className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] font-bold">Spicy Vegan Potato Curry</h2>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">Fresh shrimp in garlic butter sauce.</p>
                            <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">490 CAL</p>
                        </div>
                        <p className="text-[20px] sm:text-[24px] font-bold text-orange-500 mt-2 sm:mt-0 sm:ml-16">$26</p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0 pt-[50px] lg:pt-[100px] max-w-full h-auto">
                <img
                    src="/manu2.svg"
                    alt="Food Item"
                    className="object-cover w-full sm:w-[400px] md:w-[500px] lg:w-auto h-auto"
                />
            </div>
        </div>
    );
}
