import React from 'react';
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div>
             <header className="App-header">
        <div className="App-header-actions">
        <p><Link to={'/blogs'}>Blogs</Link>
          </p>
          <p>
            <Link to={'/projects'}>Projects</Link>
          </p>
        <p>
            <Link to={'/'}>About</Link>
        </p>
      <p><Link to={'/'}>Home</Link></p>
        </div>
      </header>
      <div className="projecTiles">
      <div className="project">
            <p className="title">Repl it excercises</p>
            <p className="content">starting out wth javascript</p>
            <a href="https://replit.com/@chetanV01/levelZerolc1#index.js?embed=1&output=1" ><button className="project1-btn">View Live</button></a>
          </div>
          <div className="project">
            <p className="title">TBC game</p>
            <p className="content">Play now by answering simple questions</p>
            <a href="https://replit.com/@chetanV01/TBC-game#index.js?embed=1&output=1" ><button className="project1-btn">Play</button></a>
          </div>
        
          <div className="project">
            <p className="title">Oculus</p>
            <p className="content">An ecommerce platfrom made using Vanilla Js</p>
            <a href="https://vigilant-booth-7258e2.netlify.app/" ><button className="project1-btn">View Live</button></a>
            <a href="https://github.com/chetan-cv/webDevelopment" ><button className="project1-btn">See Code</button></a>
          </div>
          <div className="project">
            <p className="title">To-Do</p>
            <p className="content">To Do app using ReactJs and Firebase</p>
            <a href="https://chetan-cv.github.io/To-Do-React"><button className="project1-btn">View Live</button></a>
            <a href= "https://github.com/chetan-cv/To-Do-React"><button className="project1-btn">See Code</button></a>
          </div>
          <div className="project">
            <p className="title">MineDenim Project</p>
            <p className="content">A mobile application that digitalize local businesses</p>
            <a href="https://play.google.com/store/apps/details?id=minedenim.Minedenim_shop&hl=en_IE"><button className="project1-btn">MineStore</button></a>
            <a href="https://play.google.com/store/apps/details?id=com.minedenim.shopper&hl=en_IE"><button className="project1-btn">MineShop</button></a>
          </div>
          <div className="project">
            <p className="title">Go Green</p>
            <p className="content">Simple react app. </p>
            <a href="https://codesandbox.io/s/magical-morning-lsz5d"><button className="project1-btn">View Live</button></a>
            <button className="project1-btn">See Code</button>
          </div>
          
          <div className="project">
            <p className="title">Paginated Api + app</p>
            <p className="content">A mobile application that gets paginated data and a rest api that creates paginated data</p>
            <a href="https://chetanverma1.medium.com/working-with-paginated-rest-api-flutter-and-django-75c2be1c55d1"><button className="project1-btn">View Live</button></a>
            <a href="https://github.com/chetan-cv/Paginated-Data"><button className="project1-btn">View Live</button></a>
          </div>
          
      </div>
        </div>
    );
}

export default Projects