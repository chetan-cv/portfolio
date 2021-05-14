import './header.css';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Header = () => {

  const linkStyle = {
    textDecoration: "none",
    color: 'white'
  };

  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const handleClick = () => setClick(!click);

  return (
      <nav className='navbar'>
        <div className='navbar-container container'>
        <a href="#" className='navbar-logo' onClick={closeMobileMenu}>
              <FaBars className='navbar-icon' />
              Yo
            </a>
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
          </ul>
        </div>
      </nav>
  );
}
export default Header;
