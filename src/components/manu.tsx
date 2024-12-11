import Image from 'next/image';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400"
});

const ChoosePickComponent = () => {
  return (
    <div className="w-full h-[700px] bg-black mx-auto px-4">

      <h1 className={`text-center text-[32px] font-normal py-4 text-[#FF9F0D] ${greatVibes.className}`}>Chose & Pick</h1>
    
      <h2 className="text-center text-[48px] font-[700] text-white leading-[56px]">
        From Our Menu
      </h2>

      <div className="flex flex-wrap justify-start space-x-6 mt-4 ml-[30px]">
        <p className="text-white cursor-pointer text-lg">Breakfast</p>
        <p className="text-white cursor-pointer text-lg">Lunch</p>
        <p className="text-white cursor-pointer text-lg">Dinner</p>
        <p className="text-white cursor-pointer text-lg">Dessert</p>
        <p className="text-white cursor-pointer text-lg">Drink </p>
        <p className="text-white cursor-pointer text-lg">Snack</p>
        <p className="text-white cursor-pointer text-lg">Soups</p>
      </div>

      <div className="flex flex-col md:flex-row mt-8">

        {/* Left Side: Two images stacked vertically */}
        <div className="relative w-full md:w-[700px] h-[406px] mb-4 md:mb-0 mt-[100px] md:mt-0">
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              src="/lotacleave.svg" 
              alt="Image 1"
              width={600}
              height={203}
              className="object-cover"
            />
          </div>
          <div className="absolute w-full h-full top-0 left-0 z-10">
            <Image
              src="/manu.svg" 
              alt="/manu"
              width={515}
              height={203}
              className="object-cover"
            />
          </div>
        </div>

      
        <div className="w-full md:w-[765px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1st Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white ">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m1.svg"
                alt="Image 3"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Lettuce Leaf</p>
              <p className="text-[14px]">Fresh and crunchy</p>
              <p className="text-[14px] text-[#FF9F0D]">$12.99</p>
            </div>
          </div>

          {/* 2nd Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m2.svg" 
                alt="Image 4"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Tomato Slice</p>
              <p className="text-[14px]">Juicy and ripe</p>
              <p className="text-[14px] text-[#FF9F0D]">$10.99</p>
            </div>
          </div>

          {/* 3rd Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m3.svg" 
                alt="Image 5"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Chicken Breast</p>
              <p className="text-[14px]">Grilled perfection</p>
              <p className="text-[14px] text-[#FF9F0D]">$15.99</p>
            </div>
          </div>

          {/* 4th Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m4.svg" 
                alt="Image 6"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Crispy Bacon</p>
              <p className="text-[14px]">Crunchy and salty</p>
              <p className="text-[14px] text-[#FF9F0D]">$9.99</p>
            </div>
          </div>

          {/* 5th Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m5.svg" 
                alt="Image 7"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Avocado</p>
              <p className="text-[14px]">Rich and creamy</p>
              <p className="text-[14px] text-[#FF9F0D]">$14.99</p>
            </div>
          </div>

          {/* 6th Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m6.svg" 
                alt="Image 8"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Grilled Cheese</p>
              <p className="text-[14px]">Melted cheese</p>
              <p className="text-[14px] text-[#FF9F0D]">$11.99</p>
            </div>
          </div>

          {/* 7th Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m7.svg"
                alt="Image 9"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Grilled Veggies</p>
              <p className="text-[14px]">Healthy and tasty</p>
              <p className="text-[14px] text-[#FF9F0D]">$13.99</p>
            </div>
          </div>

          {/* 8th Div */}
          <div className="w-full md:w-[376px] h-[79px] flex items-center bg-black text-white p-2">
            <div className="w-[80px] h-[79px]">
              <Image
                src="/m8.svg"
                alt="Image 10"
                width={80}
                height={79}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-[20px]">Sweet Potato</p>
              <p className="text-[14px]">Soft and sweet</p>
              <p className="text-[14px] text-[#FF9F0D]">$8.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePickComponent;
