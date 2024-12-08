import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 bg-black relative">
      
      <div className="mt-8 w-[869px] h-[451px] bg-white shadow-lg rounded-lg flex flex-col items-center relative pt-[20px]">
      
        <div className="absolute -top-12">
          <Image
            src="/tsetimonals.svg"
            alt="Client Image"
            width={133}
            height={134}
            className="rounded-full"
          />
        </div>

        {/* Smaller Image */}
        <div className="mt-20">
          <Image
            src="/coma.svg"
            alt="Small Icon"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>

        {/* Demo Text */}
        <p className="mt-4 text-center text-gray-700 px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit.r adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit.
        </p>

        {/* Bottom Image */}
        <div className="mt-6">
          <Image
            src="/star.svg" 
            alt="Client Logo"
            width={152}
            height={24}
          />
        </div>

        {/* Name and Role */}
        <h3 className="mt-4 text-xl font-bold">John Doe</h3>
        <p className="text-gray-500 text-sm">CEO, Example Company</p>
      </div>

      {/* Background Image */}
      <div className="absolute w-[400px] h-[300px] right-[230px] bottom-[10px] opacity-50">
        <Image
          src="/pholbg.svg"
          alt="Background Design"
          layout="fill"
          objectFit="contain"
        />
        
      </div>

    </div>
  );
};

export default Testimonials;
