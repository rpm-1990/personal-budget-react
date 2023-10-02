import React from 'react';
import './App.scss';

import 
  {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/footer';
import Hero from './Hero/hero';

function App() {
  return (
    <Router className="App">
      <Menu/>
      <Hero/>
      <div className="main Container">
        
        <Routes>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}


export default App;