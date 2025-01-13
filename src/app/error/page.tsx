import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Mainbanner from "../../components/mainbanner"

import Errorsignin from "../../components/errorsignin"

const errorpage = () => {
  return (
    <div><Navbarmanu/>
    <Mainbanner name='404 eror' pageName='404'/>
    <Errorsignin/>
\
    
    
    </div>
  )
}

export default errorpage