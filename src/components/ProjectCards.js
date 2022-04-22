import React from 'react';
import ProjectModal from './ProjectModal';
import projectData from "./projectData.js";
import './ProjectCards.css';

function ProjectCards(props) {
    const data = projectData.map( project => {
        return (
            <ProjectModal
            title = {project.title}
            key = {project.id}
            info = {project.info}
            tech = {project.techStack}
            img = {project.faviconImg}
            siteLink = {project.liveSite}
            github = {project.gitHub}
            time = {project.builtTime}
            techStack = {project.techStack}
            upcoming = {project.upcomingFeatures}
        />
        )
    })
    return(
        <section className="cards">
            {data}
        </section>
    )
}

export default ProjectCards;