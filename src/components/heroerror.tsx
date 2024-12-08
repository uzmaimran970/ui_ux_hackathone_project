export default function Banner() {
    return (
      <div 
        className="relative w-full h-[410px] bg-cover bg-center"
        style={{ backgroundImage: "url('/manupagebg.svg')" }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          {/* Main Text: "Our Menu" */}
          <h1 className="text-white text-[48px] font-bold">404 Err0r</h1>
          
          {/* Sub-text: "Home > Menu" */}
          <p className=" text-white text-[20px] mt-4">
            <a href="/home">Home</a> &gt;<span className="text-[#FF9F0D]">404</span> 
          </p>
        </div>
      </div>
    );
  }
  