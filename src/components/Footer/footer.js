import './footer.css';
import React from 'react';

const Footer = (props) =>{
    return (
    
        <div className="footer">
        <p>To connect:</p>
        <div className='connect'>
            {
                props.footer.map( (item)=>
                  (  <img  key={item.link} onClick={()=> window.open(item.link, "_blank")} alt='t' src={item.image} />
                ))
            }
        </div>
      </div>
    );
}

export default Footer;