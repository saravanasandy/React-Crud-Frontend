import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';

const SideBar = () => {

    let context = useContext(UserContext);
  return (
   
         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<Link to ="/portal/dashboard" className="sidebar-brand d-flex align-items-center justify-content-center" >
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">{context.username} </div>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link className="nav-link" to ="/portal/dashboard">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link className="nav-link" to ="/portal/users">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Users</span></Link>
</li>



{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link to="/portal/sample" className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Sample</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link to="/portal/sample-2" className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Sample-2</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link to="/portal/sample-3" className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Sample-3</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link to="/portal/sample-4" className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Sample-4</span></Link>
</li>

</ul>
   
  )
}

export default SideBar;