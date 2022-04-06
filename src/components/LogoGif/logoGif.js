import React, { useState } from 'react';
import './logoGif.css';
import logoVfx from '../../logo/logovfx_v4.mp4';
import Home from '../Home/home';


const LogoGif = () => {
    const [activateAnimation, setActivateAnimation] = useState(false);
    const [showHome, setShowHome] = useState(false);

    const endOfVideo = () => {
        setActivateAnimation(true);
        console.log('end');
        setInterval(() => {
            setShowHome(true);
        }, 800);
    }

    return (
        <div>
            {
                showHome ? <Home /> : <div className={activateAnimation ? 'logoDiagnol' : 'logoGif'}>
                    <video className='video' preload='auto' autoPlay muted height='100%' width='100%' onEnded={endOfVideo} >
                        <source src={logoVfx} type='video/mp4' />
                    </video>
                </div>
            }

        </div>

    )
}

export default LogoGif;