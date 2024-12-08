import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Heroerror from "../../components/heroerror"
import Footer1 from "../../components/footer1"
import Footer2 from "../../components/footer2"
import Footer3 from "../../components/footer3"
import Errorsignin from "../../components/errorsignin"

const errorpage = () => {
  return (
    <div><Navbarmanu/>
    <Heroerror/>
    <Errorsignin/>
    <Footer1/>
    <Footer2/>
    <Footer3/>
    
    
    </div>
  )
}

export default errorpage