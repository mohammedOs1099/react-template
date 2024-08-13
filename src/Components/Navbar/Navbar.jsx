import React from "react";
import stayl from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
    
<nav className="navbar fixed-top  navbar-expand-lg bg-dark" data-bs-theme="dark">

< div className="container  ">
<NavLink className="navbar-brand text-white " to="">START FRAMEWORK</NavLink>
    
     <button className="navbar-toggler    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon  " />
     </button>
     <div className="   collapse navbar-collapse justify-content-end m-2     " id="navbarSupportedContent">
       <ul className="navbar-nav mb-2 mb-lg-0">
         <li  className= {`${stayl } nav-item `} >
           <NavLink  className={({ isActive }) => (isActive ? `${stayl.active} nav-link text-white ` : 'nav-link text-white')}    aria-current="page" to="about">ABOUT</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className={({ isActive }) => (isActive ? `${stayl.active} nav-link text-white ` : 'nav-link text-white')} to="portfolio">PORTFOLIO</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className={({ isActive }) => (isActive ? `${stayl.active} nav-link text-white ` : 'nav-link text-white')} to="contact">CONTACT</NavLink>
         </li>
         
      
       </ul>
      
     </div>

</div>

      

 
 
</nav>

    </>
  );
}

export default Navbar;
