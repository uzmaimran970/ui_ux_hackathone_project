"use client";

import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the interface for Chef data
interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  description: string;
  available: boolean;
  imageUrl: string;
}

export default function Gridshef() {
  const [chefs, setChefs] = useState<Chef[]>([]); 

  // Function to fetch chef data
  const getChefsData = async () => {
    try {
      // Fetch the chef data from Sanity using groq query
      const chefsData: Chef[] = await client.fetch(`*[_type == "chef"]{
        _id,
        name,
        position,
        experience,
        specialty,
        description,
        available,
        "imageUrl": image.asset->url
      }`);

      // Save the fetched data into the chefs state
      setChefs(chefsData);
    } catch (error) {
      console.error('Error fetching chefs data:', error);
    }
  };

  // When the component mounts, fetch the data
  useEffect(() => {
    getChefsData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white bg-no-repeat pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-full px-4 sm:px-8 lg:px-16 xl:w-[1320px]">
        
        {/* Rendering the fetched chef data */}
        {chefs.map((chef) => (
          <div key={chef._id} className="flex flex-col items-center">
            {/* Displaying chef's image */}
            <Image
              src={chef.imageUrl}  // Image URL fetched from the Sanity query
              alt={chef.name}      // Chef's name as alt text
              width={305}           // Image width
              height={328}          // Image height
              className="object-cover"
            />
            {/* Displaying chef's name, position, and other details */}
            <p className="text-[20px] text-[#333333] mt-4">{chef.name}</p>
            <p className="text-[18px] text-[#333333]">{chef.position}</p>
            <p className="text-[16px] text-[#333333]">{chef.specialty}</p>
            <p className="text-[14px] text-[#333333]">{chef.experience} years of experience</p>
            <p className="text-[14px] text-[#333333]">{chef.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
