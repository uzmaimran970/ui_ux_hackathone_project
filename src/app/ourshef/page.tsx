import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Heroshefs from "../../components/heroshefs"
import Gridshef from "../../components/gridshef"
import Footer1 from "../../components/footer1"
import Footer2 from "../../components/footer2"
import Footer3 from "../../components/footer3"


const page = () => {
  return (
    <div>
        <Navbarmanu/>
        <Heroshefs/>
        <Gridshef/>
        <div>
        <Footer1/>
        <Footer2/>
        <Footer3/>
        </div>
    

    </div>
  )
}

export default page