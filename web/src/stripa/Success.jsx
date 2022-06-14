import React, { useEffect } from 'react'
import {runCan} from "./confetti";
import { Link } from "react-router-dom";
const success = () => {

  setTimeout(() => {
    
    if (window.location.pathname === "/successs") {
  localStorage.clear();
  runCan();
  

    }

  },
    
  1000);
    


  
    


  return (
    <div>
    
      <>
        the payment was successful and you can now 
        <button     className ="btn btn-success">
          <Link  to="/" >Continue Shopping</Link>
        </button>



   
            
      



      </>

   </div>
  )
}

export default success