import './header.css';
import React from 'react';

const Header = () => {
    const linkStyle = {
        textDecoration: "none",
        color: 'white'
      };

    return (
    <header className="App-header">
 <div className="App-header-actions">
   <a style={linkStyle} href= '#blogs'>Blogs</a>
   <a style={linkStyle} href= '#projects'>Projects</a>
   <a style={linkStyle} href= '#about'>About</a>
   <a style={linkStyle} href= '#home'>Home</a>
 </div>
</header>
    );
}
export default Header;
 