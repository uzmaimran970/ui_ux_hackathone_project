import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Mainbanner from "../../components/mainbanner"
import Gridshef from "../../components/gridshef"



const page = () => {
  return (
    <div>
        <Navbarmanu/>
        <Mainbanner name='Our Shefs' pageName='our shefs'/>
        <Gridshef />
        
    

    </div>
  )
}

export default page