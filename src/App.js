import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/index.js';
import Nav from './components/Nav/index.js';
import Footer from './components/Footer/index.js';
import About from './pages/About/index.js';
import Portfolio from './pages/Portfolio/index.js';
import Contact from './pages/Contact/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
