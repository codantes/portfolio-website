import React from 'react';

function About() {
    return(
        <section className="about">
            <h1 className='section-title'>About Me</h1>
            <article>
                <h2>I am a Frontend Developer learning new skills at light-speed</h2>
                <p>I make jaw-dropping UI for your web-apps and websites. I am also contiously learning about new technologies like Blockchain development, web3, defi etc. to provide best service possible. 
                </p>
                <p>
                    These are the skills I am a bada*s with:
                <ul className='skills'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Tailwind CSS</li>
                        <li>Vanilla JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </p>
            </article>
        </section>
    )
}

export default About;