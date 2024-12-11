import Image from 'next/image';

export default function gridshef() {
  
  const chefNames = [
    'Chef John',
    'Chef Maria',
    'Chef Ahmed',
    'Chef Sarah',
    'Chef Michael',
    'Chef Priya',
    'Chef Alex',
    'Chef Sophie',
    'Chef James',
    'Chef Olivia',
    'Chef David',
    'Chef Emily',
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white bg-no-repeat pt-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-full px-4 sm:px-8 lg:px-16 xl:w-[1320px]">
        
        {/* Mapping chef names */}
        {chefNames.map((chef, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={`/shf${index + 1}.svg`}
              alt={`Chef ${index + 1}`}
              width={305}
              height={328}
              className="object-cover"
            />
            <p className="text-[20px] text-[#333333] mt-4">{chef}</p> 
            <p className="text-[18px] text-[#333333]">Chef</p>
          </div>
        ))}
      </div>
    </div>
  );
}
