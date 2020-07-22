import React from 'react';

import './App.css';
import Home from './containers/home';
import Header from './components/header';
import Hero from './components/hero';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from "./containers/contactus";
import Post from './containers/posts';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Hero />


      <Route path="/" exact component={Home} />
      <Route path="/contactus" component={Contact}/>
     <Route path="/posts/:postId" component = {Post} />
     

    </div>
    </Router>
    
  );
}

export default App;
