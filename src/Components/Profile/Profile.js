import React, { useContext, useState } from 'react'
import UserContext from '../../UserContext';

const Profile = () => {
    const [name,setName] = useState();
    let context = useContext(UserContext);
    const changeProfile = ()=>{
        context.setUsername(name);
    }
  return (
    <div className="container">
        <div className="row">
        <div className="col">
            <div className="col-lg-6">
                <label className='form-control'>UserName</label>
            </div>
            <div className="col-lg-6">
            <input className = " form-control profile-input" type="text" value={name}  id='' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <br/>
            <div className="col-lg-2">
            <button className='form-control btn-primary' onClick={changeProfile}>Save</button>
            </div>
          
        
            </div> 
        </div>
        
    </div>
  )
}

export default Profile