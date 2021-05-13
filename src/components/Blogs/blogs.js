import './blogs.css';
import React from 'react';
import { Slide, Fade } from 'react-reveal';


const Blogs = (props) => {

    return (
        <div className="Blogs" id='blogs'>
            <Slide left duration={2000}>
                <h1 className='blogsHeading'>Blogs</h1>
            </Slide>
            <Slide left duration={2000} delay={500}>
                <div className="headerBar"></div>
            </Slide>

            <section className="BlogsTiles">
                {
                    props.blogs.map((item) => (
                        <Fade bottom duration={2000}>
                            <article className='blogClick' key={item.title} onClick={()=> window.open(item.link, "_blank")}>
                                <div>
                                    <img alt='t' className='TileImg' src={item.image}></img>
                                    <div className='BlogTileContent'>
                                        <p className='title'>{item.title}.</p>
                                        <p className='subTitle'>{item.date}</p>
                                        <div className="headerBar blogBar"></div>
                                        <p className='desc'>{item.desc}</p>
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

export default Blogs;