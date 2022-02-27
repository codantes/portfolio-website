import React from 'react';
import ProjectCards from './ProjectCards';

function Projects() {
    return(
        <section className="projects">
            <h1 className="section-title">Projects</h1>
            <ProjectCards
                image = "/images/ecom-preview.jpg"
                title = "E-com Product page"
                projectInfo = "Ecommerce product page To buy shoes. Has a cart preview. Reponsive as hell"
            />
        </section>
    )
}

export default Projects;