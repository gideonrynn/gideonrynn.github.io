// import Nav from './components/Nav/Nav'
import Intro from './components/Intro/Intro'
import Focus from './components/Focus/Focus'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Nav/> */}
        <Intro/>
        <Work/>
        <Focus/>
        <Contact/>
    </div>
  );
}

export default App;
