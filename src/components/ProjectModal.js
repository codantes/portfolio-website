import React from 'react';
import './projectModal.css';
const ProjectModal = (props) => {
    const [modal, setModal] = React.useState(false);
    const displayModal = () => {
        setModal(!modal);
    }
    return ( 
        <div className="project-modal">
            <img onClick={displayModal} src={props.img} alt="" />
            {
                (modal) &&
                <article>
                <h2>{props.title}</h2>
                <p>{props.info}</p>
                <p className='techstack'>This is the tech stack I used: {props.techStack}</p>
                <p className='built-time'>Time taken to Build: {props.time}</p>
                <section>
                    <a href={props.github}>Github</a>
                    <a href={props.siteLink}>site</a>
                </section>
                </article>
            }
        </div>
     );
}
 
export default ProjectModal;