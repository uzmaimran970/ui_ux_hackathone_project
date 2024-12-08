import React from 'react';
import Navbarmanu from "../../components/navbarmanu";
import Heromanu from "../../components/heromanu";
import Hero2manu from "../../components/hero2manu";
import Hero3manu from "../../components/hero3manu";
import Cta from "../../components/cta";
import Hero4manu from "../../components/hero4manu"
import Hero5manu from "../../components/hero5manu"
import Footer1 from "../../components/footer1"
import Footer2 from "../../components/footer2"
import Footer3 from "../../components/footer3"

const Page = () => {
  return (
    <div>
      <Navbarmanu />
      <Heromanu />
      <Hero2manu />
    
      <Hero3manu />
      <Cta/>
      <Hero4manu/>
      <Hero5manu/>
      <Footer1/>
      <Footer2/>
      
      <Footer3/>
      
    </div>
  );
};

export default Page;
