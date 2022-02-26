import React from 'react';
import Hero from './Hero.js';
import Navbar from './Navbar.js';

function App(){
    return(
        <>
        <div class="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <Navbar />
        <Hero />
        </>
    )
}

export default App;