import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCards from '../components/ProjectCards';
import './Homepage.css';
const Homepage = () => {
    return ( 
        <main>
            <header>
            <Navbar />
                <section className='banner'>
                    <article>
                        <h1>Pranav Kumar</h1>
                        <h2>I create amazing web experiences for your users</h2>
                    </article>
                    <img src="./images/man-standing.png" alt="" />
                </section>
            </header>
            <section className='about-me'>
                <h1>About Me</h1>
                <img src="./images/man-with-phone.png" alt="" />
                <article>
                    <h2>I am a frontend developer learning new skills at light-speed</h2>
                    <p>I make jaw-dropping UI for your web-apps and websites.I specialise in React.js. I am always experimenting with new front-end frameworks to be industry relevant. I am also continously learning about new technologies like Blockchain development, web3, defi etc. to provide best service possible.</p>
                    <p>These are the skills I am EPIC at:</p>
                    <p>
                    <ul className='skills'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SCSS</li>
                            <li>Tailwind CSS</li>
                            <li>Javascript(ES6)</li>
                            <li>React.js</li>
                            <li>Figma</li>
                            <li>UI design</li>
                            <li>webflow</li>
                            <li>WordPress</li>
                        </ul>
                    </p>
                </article>
            </section>

            <section className='projects'>
                <h1>Projects</h1>
                <article>
                    <ProjectCards />
                </article>
            </section>
        </main>
     );
}
 
export default Homepage;