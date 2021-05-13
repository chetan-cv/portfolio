import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/home';
  import React from 'react';

function App() {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Home} />      
    </Router>
    </div>
  );
}


export default App;



