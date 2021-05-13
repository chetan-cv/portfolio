import './projects.css';
import React, {useState} from 'react';
import { Slide,Fade } from 'react-reveal';

const Projects = (props) => {

  const [checkOutBtnVisibilty, setcheckOutBtnVisibilty] = useState('visible');
  const [viewLiveBtnVisibilty, setViewLiveBtnVisibilty] = useState('hidden');
  const [seeCodeBtnVisibilty, setSeeCodeBtnVisibilty] = useState('hidden');

  const handleCheckOutButton = (item) =>{
    setcheckOutBtnVisibilty('hidden');
    if(item.viewLink != null){
      setViewLiveBtnVisibilty('visible');
    }
    if(item.codeLink != null) {
      setSeeCodeBtnVisibilty('visible');
    }
  }
 
  return (
    <div className="Projects" id='projects'>
      <Slide right duration={2000}>
        <h1 className='projectsHeading'>Projects</h1>
      </Slide>
      <Slide right duration={2000} delay={500}>
        <div className="headerBar"></div>
      </Slide>
        <section className="ProjectsTiles">
          {
            props.project.map( (item) => (
              <Fade bottom duration={2000} delay={item.delay}>
              <article className='TileContent' key={item.title}>
              <img alt='t' className="TileImg" src={item.image}></img>
              <div className="textOverlay">
                <p>{item.title}</p>
               <button className='checkOutBtn' onClick={() =>handleCheckOutButton(item)} style={{visibility:checkOutBtnVisibilty}}>Chech Out</button>
               <div className="linkBtn">
              {
                item.viewLink !=null ? <button className='checkOutBtn' onClick={()=> window.open(item.viewLink, "_blank")} style={{visibility:viewLiveBtnVisibilty}}>View Live</button> : null 
              } 
              {
                item.codeLink !=null ?
                item.title ==='MineDenim Project' ? 
                <button className='checkOutBtn' onClick={()=> window.open(item.codeLink, "_blank")} style={{visibility:seeCodeBtnVisibilty}}>View Live 2</button> :
                 <button className='checkOutBtn' onClick={()=> window.open(item.codeLink, "_blank")} style={{visibility:seeCodeBtnVisibilty}}>See Code</button> : null
              }
               </div>
              </div>
            </article>
            </Fade>
            ))
          }
      </section>   
    </div>
  );
}
 

export default Projects;