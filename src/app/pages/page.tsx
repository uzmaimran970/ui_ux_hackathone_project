import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Heropages from "../../components/heropages"
import Footer1 from "../../components/footer1"
import Footer2 from "../../components/footer2"
import Footer3 from "../../components/footer3"
import Notfound from "../../components/notfound"

const pages = () => {
  return (
    <div>
      <Navbarmanu/>
      <Heropages/>
      <Notfound/>
      <Footer1/>
      <Footer2/>
      <Footer3/>
    </div>
  )
}

export default pages
