import './about.css';
import dp from '../../logo/dp.png';
import FrontRemovebgPreview from '../../logo/front-removebg-preview.png';
import BackRemovebgPreview from '../../logo/back-removebg-preview.png';
import UiUxRemovebgPreview from '../../logo/uiux-removebg-preview.png';
import DataProcess from '../../logo/data-process.png';
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
            <p className="whatIDoContent">For the backend part, I use <span style={{ fontWeight: "500" }}>Python and Django-MVC Framework.</span> <br />I also have experience in <span style={{ fontWeight: "500" }}>AWS and GCP platforms.</span></p>
          </div>
        </Fade>
        <Fade left duration={2000} delay={800}>
          <div>
            <img alt="T" src={UiUxRemovebgPreview}></img>
            <p className="whatIDoTitle">UI/UX</p><br />
            <p className="whatIDoContent">I work in creating intuitive UI effects and dynamic user experiences.<br />Always be <span style={{ fontWeight: "500" }}>meticulous, concise</span> and don't forget to <span style={{ fontWeight: "500" }}>personalize.</span></p>
          </div>
        </Fade>
        <Fade left duration={2000} delay={1100}>
          <div>
            <img alt="T" src={DataProcess}></img>
            <p className="whatIDoTitle">Data processing</p><br />
            <p className="whatIDoContent">Have also worked with data processing tools and technologies including <span style={{ fontWeight: "500" }}>Kafka and Pyspark</span> along with Visualization tools like <span style={{ fontWeight: "500" }}>Grafana.</span></p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;