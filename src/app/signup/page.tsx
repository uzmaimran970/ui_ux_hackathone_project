import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Herosignup from "../../components/herosignup"
import Signupform from "../../components/signuppform"
import Footer1 from "../../components/footer1"
import Footer2 from "../../components/footer2"
import Footer3 from "../../components/footer3"

const signup = () => {
  return (
    <div>
        <Navbarmanu/>
        <Herosignup/>
        <Signupform/>
        <Footer1/>
        <Footer2/>
        <Footer3/>
    </div>
  )
}

export default signup