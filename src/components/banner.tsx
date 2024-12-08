import Image from 'next/image';

const Banner = () => {
  return (
      <div className=" relative w-full h-[338px] sm:h-[200px] md:h-[280px]">
      <Image
        src="/banner.png"
        alt="Chose Us"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
    </div>
  );
}

export default Banner;
