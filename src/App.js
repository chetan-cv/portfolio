import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/home';
import LogoGif from './components/LogoGif/logoGif';
import React, {useState} from 'react';

function App() {
  const [A,setA] = useState(false);
  setInterval(function(){ setA(true) }, 5200);
  return (
    <div>
    <Router>
      <Route exact path="/" component={ A ? Home : LogoGif} />      
    </Router>
    </div>
  );
}


export default App;



