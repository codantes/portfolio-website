import React from 'react';

function ProjectCards(props) {
    return(
        <section className="card">
            <a href={props.siteLink}><img src={props.image} alt="" /></a>
            <article>
            <h1>{props.title}</h1>
            <p>{props.projectInfo}</p>
            <p className='techstack'>This is the tech stack I used: {props.techStack}</p>
            <p className='built-time'>Time taken to Build: {props.time}</p>
            <section>
                <a href={props.github}>Github</a>
                <a href={props.siteLink}>site</a>
            </section>
            </article>
        </section>
    )
}

export default ProjectCards;