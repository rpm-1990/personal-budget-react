import React from 'react';
import './App.css';

import 
  {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import Aboutpage from './Aboutpage/Aboutpage';
import Loginpage from './Loginpage/Loginpage';
import Menu from './Menu/Menu';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';

function App() {
  return (
    <Router className="App">
      <Menu/>
      <Hero/>
      <div className="main Container">
        
        <Routes>
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Login" element={<Loginpage/>}/>
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}


export default App;
