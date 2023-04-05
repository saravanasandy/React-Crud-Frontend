import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const UserView = () => {
    const params = useParams();
        console.log(params);

        const [searchparams,setsearchparams] = useSearchParams();
        console.log(...searchparams);

        const [UserDate,setUserData] = useState({});

        useEffect(()=>{
          loaderUser();
        },[])

        let loaderUser = async ()=>{
          try {
        let user =   await axios.get(`https://6411ca9a37c88aa434a1bc78.mockapi.io/users/${params.id}`)
            // console.log(user.data);
            setUserData(user.data);
          } catch (error) {
            
          }    
          
        }

  return (
    <div className='user-card'>
    
      <h2 style={{color:"yellowgreen"}}>{params.id}</h2> 
      <h2 style={{color:"green"}}>{UserDate.name}</h2>  
      <h2 style={{color:"green"}}>{UserDate.position}</h2>  
      <h2 style={{color:"green"}}>{UserDate.office}</h2>  
      <h2 style={{color:"green"}}>{UserDate.age}</h2>  
      <h2 style={{color:"green"}}>{UserDate.startdate}</h2>  
      <h2 style={{color:"darkgreen"}}>{UserDate.salary}</h2> 

     
    </div>
  )
}

export default UserView