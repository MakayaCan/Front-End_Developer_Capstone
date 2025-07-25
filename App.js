import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';


function App() {
  return (
  
          <>
            <Nav />
            <Main />
            <Menu />
            <Testimonials />
            <About />
            <Footer />
          </>
        );
      } ;
        
  


export default App;
