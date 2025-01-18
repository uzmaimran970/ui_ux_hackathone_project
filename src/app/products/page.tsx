
import Mainbanner from "../../components/mainbanner"
import Shopproducts from "../../components/shopproduct"
import Shopsidebar from "../../components/shopsidebar"



const product = async () => {


  


  return (
    <>
    <Mainbanner name='Our Shop' pageName='Our Shop'/>
    <div className="w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%]">   
        <Shopproducts/>
        <Shopsidebar/>
      </div>
    </>  
  )
}

export default product;
