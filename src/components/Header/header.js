import './header.css';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import CLogo from '../../logo/c_logo.svg';

const Header = () => {

  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const handleClick = () => setClick(!click);

  return (
      <nav className='navbar'>
        <div className='navbar-container container'>
        <img alt='logo' src={CLogo} className='navbar-logo' onClick={closeMobileMenu}>
              
            </img>
          <div className='headerIcons' onClick={handleClick}>
            {click ? <IoMdClose size={25}/> : < FaBars size={25}/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a onClick={closeMobileMenu} className='nav-links' href='#home'>Home</a>
            </li>
            <li className='nav-item'>
              <a  onClick={closeMobileMenu} className='nav-links' href='#about'>About</a>
            </li>
            <li className='nav-item'>
              <a onClick={closeMobileMenu} className='nav-links' href='#projects'>Projects</a>
            </li>
            <li className='nav-item'>
              <a onClick={closeMobileMenu}className='nav-links' href='#blogs'>Blogs</a>
            </li>
            <li className='nav-item'>
              <a onClick={closeMobileMenu}className='nav-links' href='#footer'>Connect</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
export default Header;
