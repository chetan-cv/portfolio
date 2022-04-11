import { BrowserRouter as Router, Route } from "react-router-dom";
import LogoGif from './components/LogoGif/logoGif';
import React from 'react';

function App() {
  return (
    <div>
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={LogoGif} />      
    </Router>
    </div>
  );
}


export default App;




