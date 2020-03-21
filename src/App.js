import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
    </div>
  );
}

export default App;
