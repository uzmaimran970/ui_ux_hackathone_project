import React from 'react'
import Addtocartmain from "../../components/addtocartmain"
import Addtocarttotal from "../../components/addtocarttotal"
import Mainbanner from '@/components/mainbanner'
import Navbarmanu from '@/components/navbarmanu'


const Addtocart = () => {
  return (
    <>
    <Navbarmanu/>
     <Mainbanner name='Shoping Cart' pageName='Shopingcart'/>
     
    
    <Addtocartmain/>
    <Addtocarttotal/>
    </>
  )
}

export default Addtocart;