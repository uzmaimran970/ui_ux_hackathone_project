import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#ff9f0d] w-full h-auto py-4 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-20 lg:px-80">
      {/* Text Section */}
      <div className="text-white text-[14px] md:text-[16px] font-medium mb-4 md:mb-0 text-center">
        © 22 by Uzma. All rights reserved.
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 justify-center">
        {/* Facebook Icon */}
        <div className="bg-white w-[36px] h-[34px] flex items-center justify-center rounded">
          <FaFacebookF className="text-[#4f4f4f]" />
        </div>
        {/* Instagram Icon */}
        <div className="bg-white w-[36px] h-[34px] flex items-center justify-center rounded">
          <FaInstagram className="text-[#4f4f4f]" />
        </div>
        {/* Twitter Icon */}
        <div className="bg-white w-[36px] h-[34px] flex items-center justify-center rounded">
          <FaTwitter className="text-[#4f4f4f]" />
        </div>
        {/* YouTube Icon */}
        <div className="bg-white w-[36px] h-[34px] flex items-center justify-center rounded">
          <FaYoutube className="text-[#4f4f4f]" />
        </div>
        {/* Clock Icon */}
        <div className="bg-white w-[36px] h-[34px] flex items-center justify-center rounded">
          <FaClock className="text-[#4f4f4f]" />
        </div>
      </div>
    </footer>
  );
}
