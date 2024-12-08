import Image from 'next/image';

export default function CTA() {
  return (
    <div className="relative w-full h-auto ]">
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/cta_react.svg'), url('/bg_cta.svg')",
          backgroundSize: 'cover',
          filter: 'blur(1px)',
        }}
      ></div>

      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

  
      <div className="relative w-full max-w-[1319px] h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-[150px] md:py-0 px-4 lg:px-0">
        {/* First Div */}
        <div className="w-full h-auto flex flex-col items-center">
          <Image
            src="/shefcap.svg"
            alt="Chef"
            width={100}
            height={100}
            className="object-cover sm:w-[140px] sm:h-[140px]"
          />
          <div className="text-center">
            <p className="text-white text-[16px] sm:text-[20px] font-semibold">
              Professional Chefs
            </p>
          </div>
          <div className="text-center">
            <p className="text-white text-[24px] sm:text-[30px] font-semibold">
              420
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="w-full h-auto flex flex-col items-center">
          <Image
            src="/burgerdrink.svg"
            alt="Item of Food"
            width={100}
            height={100}
            className="object-cover sm:w-[120px] sm:h-[120px]"
          />
          <div className="text-center">
            <p className="text-white text-[16px] sm:text-[20px] font-semibold">
              Items of Food
            </p>
          </div>
          <div className="text-center">
            <p className="text-white text-[24px] sm:text-[30px] font-semibold">
              320
            </p>
          </div>
        </div>

        {/* Third Div */}
        <div className="w-full h-auto flex flex-col items-center">
          <Image
            src="/spoonfok.svg"
            alt="Years of Experience"
            width={100}
            height={100}
            className="object-cover sm:w-[106px] sm:h-[118px]"
          />
          <div className="text-center">
            <p className="text-white text-[16px] sm:text-[20px] font-semibold">
              Years of Experience
            </p>
          </div>
          <div className="text-center">
            <p className="text-white text-[24px] sm:text-[30px] font-semibold">
              30+
            </p>
          </div>
        </div>

        {/* Fourth Div */}
        <div className="w-full h-auto flex flex-col items-center">
          <Image
            src="/pizza.svg"
            alt="Happy Customers"
            width={100}
            height={100}
            className="object-cover sm:w-[120px] sm:h-[120px]"
          />
          <div className="text-center">
            <p className="text-white text-[16px] sm:text-[20px] font-semibold">
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <p className="text-white text-[24px] sm:text-[30px] font-semibold">
              220
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}