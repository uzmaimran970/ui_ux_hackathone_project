// pages/index.js
import { ChatBubbleBottomCenterIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400"
});

export default function BlogPostSection() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 py-8 text-center">
        <h1 className={`text-[32px] font-normal text-[#FF9F0D] mb-4 ${greatVibes.className}`}>
          Blog Post
        </h1>
        <h2 className="text-[36px] md:text-[48px] font-bold text-white">
          Latest News <span className="text-[#FF9F0D]">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Blog Posts */}
          {["blog1.svg", "blog2.svg", "blog3.svg"].map((src, index) => (
            <div
              key={index}
              className="bg-black text-left border border-white rounded-lg overflow-hidden"
            >
              <Image
                src={`/${src}`}
                alt={`Blog ${index + 1}`}
                width={423}
                height={349}
                className="object-cover w-full"
              />
              <div className="p-4">
                <p className="text-[#FF9F0D] text-[14px] md:text-[16px] font-normal mt-4">
                  10 February 2022
                </p>
                <h3 className="text-[18px] md:text-[24px] font-bold text-white mt-2">
                  {index === 0
                    ? "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
                    : index === 1
                    ? "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"
                    : "Curabitur rutrum velit ac congue malesuada"}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-white cursor-pointer text-sm md:text-base">
                    Learn More
                  </span>
                  <div className="flex space-x-4 text-white">
                    <HandThumbUpIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-blue-500" />
                    <ChatBubbleBottomCenterIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-blue-500" />
                    <ShareIcon className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
