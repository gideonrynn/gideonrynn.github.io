import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
