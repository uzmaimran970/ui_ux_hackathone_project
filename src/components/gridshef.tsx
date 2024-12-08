import Image from 'next/image';

export default function gridshef() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white bg-no-repeat pt-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-full px-4 sm:px-8 lg:px-16 xl:w-[1320px]">
        
        {[...Array(12)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={`/shf${index + 1}.svg`}
              alt={`Chef ${index + 1}`}
              width={305}
              height={328}
              className="object-cover"
            />
            <p className="text-[20px] text-[#333333] mt-4">Chef Name {index + 1}</p>
            <p className="text-[18px] text-[#333333]">Chef</p>
          </div>
        ))}
      </div>
    </div>
  );
}
