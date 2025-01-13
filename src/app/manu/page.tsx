import React from 'react';
import Navbarmanu from "../../components/navbarmanu";
import Mainbanner from "../../components/mainbanner"
import Hero2manu from "../../components/hero2manu";
import Hero3manu from "../../components/hero3manu";
import Cta from "../../components/cta";
import Hero4manu from "../../components/hero4manu"
import Hero5manu from "../../components/hero5manu"


const Page = () => {
  return (
    <div>
      <Navbarmanu />
      <Mainbanner name='Our Manu' pageName='Manu'/>
      <Hero2manu />
    
      <Hero3manu />
      <Cta/>
      <Hero4manu/>
      <Hero5manu/>

      
    </div>
  );
};

export default Page;
