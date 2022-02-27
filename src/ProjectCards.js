import React from 'react';

function ProjectCards(props) {
    return(
        <section className="card">
            <img src={props.image} alt="" />
            <article>
            <h1>{props.title}</h1>
            <p>{props.projectInfo}</p>
            <section>
                <a href={props.github}>Github</a>
                <a href={props.siteLink}>live site</a>
            </section>
            </article>
        </section>
    )
}

export default ProjectCards;