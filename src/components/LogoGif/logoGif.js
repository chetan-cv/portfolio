import React, { useState } from 'react';
import './logoGif.css';
import logoVfx from '../../logo/logovfx_v3.mp4';

const LogoGif = () =>{
    const [ activateAnimation, setActivateAnimation] = useState(false);

    const endOfVideo = () => setActivateAnimation(true);

    return (
        <div className={activateAnimation ? 'logoDiagnol' : 'logoGif'}>
             <video className='video' preload='auto' autoPlay muted height='100%' width='100%' onEnded={endOfVideo} >
                 <source src={logoVfx} type='video/mp4' />
             </video>
        </div>
    )
}

export default LogoGif;