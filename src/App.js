import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
// import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Project from './components/project/Project';
import Scrollup from './components/scrollup/Scrollup';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        
        <Skills />
        <Qualification />
        <Project />
      </main>
      <Scrollup />
      <Contact />
    </>
  );
}

export default App;
