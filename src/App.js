import twt from './twt.svg';
import github from './github.png';
import Projects from './projects';
import Blogs from './blogs';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    
      <Route exact path="/" component={Home} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/projects" component={Projects} />
    </Router>
  );
}

export default App;

//https://chetanverma1.medium.com/

const Home = ()=>{
  return (<div className="App">
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

      <div className="About">
        <div className="About-content">
          <p><span style={{ fontSize: '30px' }}>Hey! Chetan this side. </span> <br />I am a motivated and hardworking developer who thrives on challenge and sees failure not as evidence of unintelligence but as an opportunity to grow and learn more.</p>
        </div>
        <img src="https://i.pinimg.com/originals/54/5d/c7/545dc70147b6b8a300d33ef5cc51ca5a.jpg" height="50%" width="50%" />
      </div>

      <div className="mainTiles">
          <div className="technologies">
            <p className="title">Tech Stack</p>
            <p className="content">I'm familiar with Flutter, Dart ,HTML5, CSS3, Git, JavaScript, ReactJS. <br /><br />I also have experience in Django-MVC Framework, Digital Ocean and AWS</p>
          </div>
          <div className="projects">
            <p className="title">Projects</p>
            <p className="content">I would love to show my past works. You're just a tap away</p>
            <Link to={'/projects'} className="project-btn">See here</Link>
          </div>
          <div className="blogs">
              <p className="title">Blogs</p>
              <p className="content">I have also started a habit of working on some technical and non techincal blogs. <br />You can view them here.</p>
              <Link to={'/blogs'} className="blog-btn">See here</Link>
          </div>
      </div>
      <div className="footer">
        <p>To connect:</p>
        <div>
        <a href="https://github.com/chetan-cv">
          <img src={github} />
          </a>
          <a href="https://twitter.com/_chetanverma"><img src={twt} />
          </a>
          
        </div>
      </div>
    </div>);
}

