import React from 'react'
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Header2 from "../components/header2"
import Choseus from "../components/choseus"
import Foodcatagory from "../components/foodcatagory"
import Cta from "../components/cta"
import Manu from "../components/manu"
import Ourteam from "../components/ourteam"
import Testimonials from "../components/testimonals"
import Heading from "../components/heading"
import Banner from "../components/banner"
import Blog from "../components/blog"

import Whywecho from "../components/whywecho"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Header2/>
      <Foodcatagory/>

      <Choseus/>
      <Whywecho/>
      <Cta/>
      
      <Manu/>
     
    
      <Ourteam/>
  
      < Heading/>
      <Testimonials/>
      <Banner/>
      <Blog/>




      
    </div>
  )
}

export default page
