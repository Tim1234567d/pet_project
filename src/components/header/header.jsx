import React from "react";
import { useState } from "react";
import './header.css'
// import "./button.css"
// import React from "react";
import { Link, useHistory } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";



const Header = () => { 

  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  // const [dropdown2, setDropdown2] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  // const onMouseEnter2 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown2(false);
  //   } else {
  //     setDropdown2(true);
  //   }
  // };

  // const onMouseLeave2 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown2(false);
  //   } else {
  //     setDropdown2(false);
  //   }
  // };




  return (
    <>
    
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          logo
        </Link>logo
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' >
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Главная
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              // to='/tours/:toursId'
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}>
              Услуги
            </Link>
            
            
            
           
            
          </li>
          <li className='nav-item'>
            <Link
              to='/aboutUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              О нас
            </Link> 
          </li>
         
          <li className='nav-item'
          //  onMouseEnter={onMouseEnter2}
          //  onMouseLeave={onMouseLeave2} 
            >
            <Link
              to='/contactUs'
              className='nav-links'>
              Связаться с нами 
            </Link> 
         
          </li>
          
        </ul>
        
       
          
          
      </nav>
    </>
  );
     
}

export default Header;