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
import Footer from "../components/footer1"
import Footer2 from "../components/footer2"
import Footer3 from "../components/footer3"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Header2/>
      <Foodcatagory/>

      <Choseus/>
      <Cta/>
      
      <Manu/>
      <Ourteam/>
  
      < Heading/>
      <Testimonials/>
      <Banner/>
      <Blog/>
      <Footer/>
      <Footer2/>
      <Footer3/>



      
    </div>
  )
}

export default page
