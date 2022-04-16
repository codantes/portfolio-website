import React from 'react';
import ProjectModal from './ProjectModal';
import projectData from "./projectData.js";

function ProjectCards(props) {
    const data = projectData.map( project => {
        return (
            <ProjectModal
            title = {project.title}
            key = {project.id}
            info = {project.info}
            tech = {project.techStack}
            img = {project.faviconImg}
        />
        )
    })
    return(
        <section className="card">
            {data}
        </section>
    )
}

export default ProjectCards;