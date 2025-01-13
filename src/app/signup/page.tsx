import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Mainbanner from "../../components/mainbanner"
import Signupform from "../../components/signuppform"


const signup = () => {
  return (
    <div>
        <Navbarmanu/>
        <Mainbanner name='SignUp Page' pageName='Sign up'/>
        <Signupform/>

    </div>
  )
}

export default signup