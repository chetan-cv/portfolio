import './projects.css';
import React from 'react';
import { Slide,Fade } from 'react-reveal';

const Projects = (props) => {
 
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
              <Fade key={item.title} bottom duration={2000} delay={Number(item.delay)}>
              <article className='TileContent' >
              <img alt='t' className="TileImg" src={item.image}></img>
              <div className="textOverlay">
                <p>{item.title}</p>
               <div className='linkBtn'>
              {
                item.viewLink !=null ? <button className='checkOutBtn' onClick={()=> window.open(item.viewLink, "_blank")} >View Live</button> : null 
              } 
              {
                item.codeLink !=null ?
                item.title ==='Security Assessment Rating Framework' ? 
                <button className='checkOutBtn' onClick={()=> window.open(item.codeLink, "_blank")}>View Research</button> :
                 <button className='checkOutBtn' onClick={()=> window.open(item.codeLink, "_blank")}>See Code</button> : null
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