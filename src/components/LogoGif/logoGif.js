import React, { useState,useEffect } from 'react';
import './logoGif.css';
import logoVfx from '../../logo/logovfx_v1.mp4';
import ReactPlayer from 'react-player';

const LogoGif = () =>{
    const [ activateAnimation, setActivateAnimation] = useState(false);
    useEffect(() => {
        setInterval(function(){ setActivateAnimation(true) }, 4200);
      });

    return (
        <div className={activateAnimation ? 'logoDiagnol' : 'logoGif'}>
             <ReactPlayer className='react-player' playing='false' url={logoVfx} height='100%' width='100%'/>
        </div>
    )
}

export default LogoGif;