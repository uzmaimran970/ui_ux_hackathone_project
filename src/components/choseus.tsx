import Image from 'next/image';

const ChoseUs = () => {
  return (
    <div className=" hidden relative w-full h-screen">
      <Image
        src="/gridtem.png"
        alt="Chose Us"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover sm:object-contain sm:h-[50%] md:h-full md:object-cover"
      />

      {/* Your content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white sm:hidden">
        
      </div>
    </div>
  );
}

export default ChoseUs;
