import React from "react";
import { useState } from "react";
import './header.css'
import { Link} from "react-router-dom";



const Header = () => { 

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
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