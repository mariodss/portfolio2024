
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import About from './containers/about';
import Home from './containers/home';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Skills from './containers/skills';
import NavBar from './components/navBar';


function App() {
  return (

    <div className='App'>

      
      <NavBar/>

      <div className="App_main-page-content">
      <Routes>

        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>


    </div>


  );
}

export default App;
