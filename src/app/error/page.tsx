import React from 'react'
import Navbarmanu from "../../components/navbarmanu"
import Mainbanner from "../../components/mainbanner"

import Errorsignin from "../../components/errorsignin"
import { fetchData } from '@/services/mockapi'

const errorpage = async () => {
  await fetchData()
  return (
    <div>
      <Navbarmanu/>
    <Mainbanner name='404 eror' pageName='404'/>
    <Errorsignin/>

    
    
    </div>
  )
}

export default errorpage