import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import img from "../assets/success.png"

const Success = () => {
const [loading , setLoading] = useState(true)

 useEffect(()=>{
   setInterval(() => {
     setLoading(false)
   }, 3000);

 },[])

  return (
    
    <div className=' flex flex-col items-center justify-center h-screen'>
     
    {
      loading ?  <PropagateLoader color="#36d7b7" /> : (
        <div>  
          <div>

        <h2 className=' flex text-3xl font-semibold mb-4 text-center'>Order Successful! <img className =' w-8 h-8 ml-2 items-center justify-center' src={img} alt="" />
          
        </h2>

        </div>
        <p>Your order has been successfully placed</p>
        
        </div>
      )
    }

       
    </div>
  )
}

export default Success
