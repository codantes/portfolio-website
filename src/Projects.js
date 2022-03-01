import React from 'react';
import ProjectCards from './ProjectCards';

function Projects() {
    return(
        <section className="projects" id='projects'>
            <h1 className="section-title">Projects</h1>
            <ProjectCards
                image = "/images/ecom-preview.jpg"
                title = "E-com Product page"
                projectInfo = "Ecommerce product page To buy shoes. Has a cart preview and an imagee gallery. A complete component for ecom businesses"
                techStack = {
                    <ul>
                        <li>CSS3</li>
                        <li>React.js</li>
                    </ul>
                    
                }
                time = "9hrs"
                siteLink = "https://determined-mccarthy-82c689.netlify.app/"
                github = "https://github.com/codantes/ecom-product-page"
            />

            <ProjectCards
                image = "/images/space-preview.png"
                title = "Space exploration page"
                projectInfo = "Inspired by billionaires going to space. Concept website for a space exploration company. Has effortless and very smooth UI."
                techStack = {
                    <ul>
                        <li>HTML5</li>
                        <li>SCSS</li>
                        <li>Vanilla JavaScript</li>
                    </ul>
                }
                time = "16hrs"
                siteLink = "https://eager-goldwasser-32e264.netlify.app/"
                github = "https://github.com/codantes/space-tourism-website"
            />

            <ProjectCards
                image = "/images/bookmark-preview.jpg"
                title = "Bookmark startup landing page"
                projectInfo = "Landing page for bookmark startup. Has a signup section and an FAQ section too. Everything a landing page with good conversion rate needs"
                techStack = {
                    <ul>
                        <li>CSS3</li>
                        <li>React.js</li>
                    </ul>
                }
                time = "7hrs"
                siteLink = "https://zen-ride-d82848.netlify.app/"
                github = "https://github.com/codantes/bookmark-landing-page"
            />

            <ProjectCards
                image = "/images/google-maps-preview.png"
                title = "Google maps clone"
                projectInfo = "A google maps clone built with a 3rd party API. accurately pinpoints location and displays correct directions."
                techStack = {
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Vanilla JavaScript</li>
                    </ul>
                }
                time = "5hrs"
                siteLink = "https://bongle-locate-101.netlify.app/"
                github = "https://github.com/codantes/bongleLocate--google-maps-clone-"
            />
        </section>
    )
}

export default Projects;