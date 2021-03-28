import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/index.js';
import Nav from './components/Nav/index.js';
// import Footer from './components/Footer/index.js';
import Home from './pages/Home/index.js';
import Portfolio from './pages/Portfolio/index.js';
import Contact from './pages/Contact/index.js';
import { ProjectProvider } from './context/ProjectContext'
import './App.css';

function App() {
  return (
    <>
      <div className="App AppContent">
        <Router>
          <Nav/>
          <ProjectProvider>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </ProjectProvider>
            <Header/>
        </Router> 
      </div>
      {/* <Footer className="Footer"/> */}
    </>
  );
}

export default App;
