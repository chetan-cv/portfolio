import flutterLogo from '../../logo/flutterLogo-removebg-preview.png';
import reactLogo from '../../logo/reactLogo-removebg-preview.png';
import htmlLogo from '../../logo/htmlLogo-removebg-preview.png';
import cssLogo from '../../logo/cssLogo1.png';
import pythonLogo from '../../logo/pythonLogo-removebg-preview.png';
import djangoLogo from '../../logo/djangoLogo.png';
import awsLogo from '../../logo/awsLogo-removebg-preview.png';
import gcpLogo from '../../logo/gcpLogo-removebg-preview.png';
import kafkaLogo from '../../logo/kafkaLogo-removebg-preview.png';
import dockerLogo from '../../logo/dockerLogo1.png';
import './home.css';
import Header from '../Header/header';
import About from '../About/about';
import Projects from '../Projects/projects';
import Blogs from '../Blogs/blogs';
import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-reveal';
import Footer from '../Footer/footer';

var jsonData = require("../../data.json");

const Home = () => {

  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [footer, setFooter] = useState([]);
  const [add, setAdd] = useState(false);

  const fetchData = () => {
    setProjects(jsonData.projects);
    setBlogs(jsonData.blogs);
    setFooter(jsonData.footer);
    setTimeout(() => {
      setAdd(true);
    }, 1000);
  }
  useEffect(() => {
    fetchData();
    if(window.innerWidth <=960){
      showSkills();
    }
  }, []);

  const showSkills =() => setAdd(true);

  window.addEventListener('resize',showSkills);

  return (
    <div className="App" id='home'>

      <Header />

      <div className="homeBackground">
        <div className='intro'>
          <div className="homeContent">Hey, I'm <Fade right cascade><span className='homeContentSpan name'>Chetan Verma</span></Fade><br /><br />A <Fade left cascade><span className='homeContentSpan'>Software Engineer</span></Fade></div>
        </div>

        {
          add ? <Slide right duration={1000}><Skills /> </Slide> : null
        }


      </div>

      <About />
      <Projects project={projects} />
      <Blogs blogs={blogs} />
      <Footer footer={footer} />

    </div>
    );
}

const Skills = () => {
  return (
    <div className='skills'>
      <section className='skillsHeading'>
        What I work with:
      </section>
      <div>
        <Fade left duration={3000}>
          <img alt="T" src={reactLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={200}>
          <img alt="T" src={flutterLogo}></img>
        </Fade>
      </div>
      <div>
         <Fade left duration={3000} delay={400}>
            <img alt="T" src={htmlLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={600}>
          <img alt="T" src={cssLogo}></img>
        </Fade>
      </div>
        
      <div>
        <Fade left duration={3000} delay={700}>
          <img alt="T" src={pythonLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={900}>
          <img alt="T" src={djangoLogo}></img>
        </Fade>
      </div>
      <div>
         <Fade left duration={3000} delay={1100}>
          <img alt="T" src={awsLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={1300}>
          <img alt="T" src={gcpLogo}></img>
        </Fade>
      </div>
        
        <div>
           <Fade left duration={3000} delay={1500}>
          <img alt="T" src={kafkaLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={1700}>
          <img alt="T" src={dockerLogo}></img>
        </Fade>
        </div>
       
       
    </div>
  );
}

export default Home;