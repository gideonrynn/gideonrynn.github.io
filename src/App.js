import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/index.js';
import Nav from './components/Nav/index.js';
import Footer from './components/Footer/index.js';
import About from './pages/About/index.js';
import Portfolio from './pages/Portfolio/index.js';
import Contact from './pages/Contact/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/about" exact component={About}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
          <Header/>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
