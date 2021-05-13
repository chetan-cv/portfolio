import './about.css';
import dp from '../../logo/dp.png';
import FrontRemovebgPreview from '../../logo/front-removebg-preview.png';
import BackRemovebgPreview from '../../logo/back-removebg-preview.png';
import UiUxRemovebgPreview from '../../logo/uiux-removebg-preview.png';
import React from 'react';
import { Slide, Fade } from 'react-reveal';


const About = () => {
  return (
    <div className="About" id='about'>
      <Slide left duration={2000}>
        <h1 className='aboutHeading'>ABOUT</h1>
      </Slide>
      <Slide left duration={2000} delay={500}>
        <div className="headerBar"></div>
      </Slide>

      <img className="dp" alt="T" src={dp}></img>
      <p className="dpSubtitle">"Motivated and hardworking <span style={{ color: '#188db8' }}>developer</span> who thrives on challenge and sees failure not as evidence of unintelligence but as an opportunity to <span style={{ color: '#188db8' }}>grow and learn</span> more." </p>

      <h4>What I do</h4>

      <div className="whatIDo">
        <Fade left duration={2000}>
          <div>
            <img alt="T" src={FrontRemovebgPreview}></img>
            <p className="whatIDoTitle">Frontend Development</p><br />
            <p className="whatIDoContent">I'm familiar with both the Mobile and Web frontend frameworks like:  <span style={{ fontWeight: "500" }}><br />Flutter, Dart, HTML5, CSS3, JavaScript, ReactJS.</span></p>
          </div>
        </Fade>
        <Fade left duration={2000} delay={500}>
          <div>
            <img alt="T" src={BackRemovebgPreview}></img>
            <p className="whatIDoTitle">Backend Development</p><br />
            <p className="whatIDoContent">For the backend part, I use <span style={{ fontWeight: "500" }}>Python and Django-MVC Framework.</span> <br />I also have experience in <span style={{ fontWeight: "500" }}>Digital Ocean and AWS.</span></p>
          </div>
        </Fade>
        <Fade left duration={2000} delay={1000}>
          <div>
            <img alt="T" src={UiUxRemovebgPreview}></img>
            <p className="whatIDoTitle">UI/UX</p><br />
            <p className="whatIDoContent">I work in creating intuitive UI effects and dynamic user experiences.<br />Always be clear, <span style={{ fontWeight: "500" }}>transparent</span> and <span style={{ fontWeight: "500" }}>personalize</span></p>
          </div>
        </Fade>
      </div>

    </div>
  );
}

export default About;