import React from 'react';
import Hero from './Hero.js';
import Navbar from './Navbar.js';
import Background from './Background.js';
import About from './About.js';
import Projects from './Projects.js';
import ContactSection from './ContactSection.js';

function App(){
    return(
        <>
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ContactSection />
        </>
    )
}

export default App;