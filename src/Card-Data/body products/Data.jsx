import React from 'react'

import { useState } from "react";
import  axios  from "axios";
import { useEffect } from 'react';
import Card from './Card';




const Data = () => {

  const [data, setData] = useState([]);
 
  useEffect(() => {
   
    
    axios.get('https://my-app-shopping.herokuapp.com/body_products').then(function (response) {
      console.log(response.data);
      setData(response.data);
      
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  

  return (
    <div>
      <div className=" text-center text-md-center texts">  Reviews of some fitness products</div>
    <div className=" gridd">


{data.map((item, i) => (
  <div>
   
  <Card item={item}/>

 
 
  </div>
  ))}


  </div>
  

    </div>
  )
}

export default Data