import React from 'react';
import twt from './twt.svg';
import github from './github.png';
import { Link } from "react-router-dom";


const Blogs = () => {
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
      <div className="Blog-Content">
        <div className="Blog-Text">
          <p><span style={{ fontSize: '30px' }}>Read My blog:  </span> <br /><br />Working with Paginated REST API: Flutter and Django.</p> <br />
        <a href="https://chetanverma1.medium.com/working-with-paginated-rest-api-flutter-and-django-75c2be1c55d1">

<button className="blog-btn">Click here</button>
</a> </div>
       
      </div>

      <div className="footer">
        <p>To connect:</p>
        <div>
        <a href="https://github.com/chetan-cv">
          <img alt='t'src={github} />
          </a>
          <a href="https://twitter.com/_chetanverma"><img alt='t'src={twt} />
          </a>
          
        </div>
      </div>
        </div>
    );
}

export default Blogs