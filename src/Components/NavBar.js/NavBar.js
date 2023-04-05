import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext';

const NavBar = () => {

    let context = useContext(UserContext);
    
    let navigate = useNavigate();
    const logout = ()=>{
        navigate("/")
    }
  return (
    <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

{/* <!-- Sidebar Toggle (Topbar) --> */}
<button id="sidebarToggleTop" className ="btn btn-link d-md-none rounded-circle mr-3">
    <i className ="fa fa-bars"></i>
</button>

{/* <!-- Topbar Search --> */}
<form
    className ="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div className ="input-group">
        <input type="text" className ="form-control bg-light border-0 small" placeholder="Search for..."
            aria-label="Search" aria-describedby="basic-addon2"/>
        <div className ="input-group-append">
            <button className ="btn btn-primary" type="button">
                <i className ="fas fa-search fa-sm"></i>
            </button>
        </div>
    </div>
</form>

{/* <!-- Topbar Navbar --> */}
<ul className ="navbar-nav ml-auto">

    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
    <li className ="nav-item dropdown no-arrow d-sm-none">
        <a className ="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className ="fas fa-search fa-fw"></i>
        </a>
     
       
    </li>

  
   


  

    <div className ="topbar-divider d-none d-sm-block"></div>
{/* 
    <!-- Nav Item - User Information --> */}
    <li className ="nav-item dropdown no-arrow">
        <a  className ="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className ="mr-2 d-none d-lg-inline text-gray-600 small" >
            <i className ="fa-solid fa-right-from-bracket" onClick={logout}>   Logout </i> <br/>
            <Link to = {"/portal/profile"}>
            {context.username}
            </Link>
            </span>
        </a>
      
        
    </li>

</ul>

</nav>
    </div>
  )
}

export default NavBar;