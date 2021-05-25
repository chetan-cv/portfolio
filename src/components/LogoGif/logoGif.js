import React, { useState,useEffect } from 'react';
import './logoGif.css';
import logoVfx from '../../logo/logovfx_v3.mp4';

const LogoGif = () =>{
    const [ activateAnimation, setActivateAnimation] = useState(false);
    useEffect(() => {
        setInterval(function(){ setActivateAnimation(true) }, 4200);
      });

    return (
        <div className={activateAnimation ? 'logoDiagnol' : 'logoGif'}>
             <video className='video' preload='auto' autoPlay muted height='100%' width='100%'>
                 <source src={logoVfx} type='video/mp4' />
             </video>
        </div>
    )
}

export default LogoGif;