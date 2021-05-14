import flutterLogo from '../../logo/flutterLogo.png';
import reactLogo from '../../logo/reactLogo.png';
import htmlLogo from '../../logo/htmlLogo.png';
import cssLogo from '../../logo/cssLogo.png';
import pythonLogo from '../../logo/pythonLogo.png';
import djangoLogo from '../../logo/djangoLogo.png';
import awsLogo from '../../logo/awsLogo.png';
import digtialOLogo from '../../logo/digtialOLogo.png';
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
  }, []);

  return (
    <div className="App" id='home'>

      <Header />

      <div className="homeBackground">
        <div className='intro'>
          <div className="homeContent">Hey, I'm <Fade right cascade><span style={{ fontSize: '25px', fontWeight: 'bolder', color: '#13617d' }}>Chetan Verma</span></Fade><br /><br />A full-stack <Fade left cascade><span style={{ fontWeight: '600', color: '#13617d' }}>Developer|Freelancer</span></Fade></div>
        </div>

        {
          add ? <Slide right duration={1000}><Skills /> </Slide> : null
        }


      </div>

      <About />
      <Projects project={projects} />
      <Blogs blogs={blogs} />
      <Footer footer={footer} />

    </div>);
}

const Skills = () => {
  return (
    <div className='skills'>
      <div className='mobile'>
        <Fade left duration={3000}>
          <img alt="T" src={flutterLogo}></img>
        </Fade>
      </div>
      <div className='web'>
        <Fade left duration={3000} delay={600}>
            <img alt="T" src={htmlLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={900}>
          <img alt="T" src={cssLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={1200}>
          <img alt="T" src={reactLogo}></img>
        </Fade>
      </div>
      <div className='backend'>
        <Fade left duration={3000} delay={1500}>
          <img alt="T" src={pythonLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={1800}>
          <img alt="T" src={djangoLogo}></img>
        </Fade>
      </div>
      <div className='cloud'>
        <Fade left duration={3000} delay={2100}>
          <img alt="T" src={awsLogo}></img>
        </Fade>
        <Fade left duration={3000} delay={2400}>
          <img alt="T" src={digtialOLogo}></img>
        </Fade>
      </div>
    </div>
  );
}

export default Home;