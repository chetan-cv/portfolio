import homeBackground from '../../logo/homeBackground.png';
import './home.css';
import Header from '../Header/header';
import About from '../About/about';
import Projects from '../Projects/projects';
import Blogs from '../Blogs/blogs';
import React, {useState, useEffect} from 'react';
import {Fade} from 'react-reveal';
import Footer from '../Footer/footer';

var jsonData = require("../../data.json");

const Home = () => {

  const [projects,setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [footer, setFooter] = useState([]);
  
  const fetchData = () => {
    setProjects(jsonData.projects);
    setBlogs(jsonData.blogs);
    setFooter(jsonData.footer);
  }
  useEffect(() => {
    fetchData();
}, []);

    return (
    <div className="App" id='home'>

     <Header />
  
      <div className="homeBackground">
        <img alt="T" src={homeBackground}></img>
        <div className="homeContent">Hey, I'm <Fade right cascade><span style={{fontSize: '25px', fontWeight:'bolder', color:'#13617d'}}>Chetan Verma</span></Fade><br /><br />A full-stack <Fade left cascade><span style={{fontWeight:'600',color:'#13617d'}}>Developer|Freelancer</span></Fade></div>
      </div>
  
      <About  />
      <Projects project={projects}/>
      <Blogs blogs={blogs}/>
      <Footer footer={footer}/>

    </div>);
}

export default Home;
  