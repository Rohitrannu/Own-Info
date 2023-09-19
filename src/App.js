
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Experence from './Component/Experence';
import Footer from './Component/Footer';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Project from './Component/Project';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
        <Routes>
       
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/experence" element={<Experence/>} />
          <Route exact path="/project" element={<Project/>} />
          <Route exact path="/contact" element={<Contact/>} />
          
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
