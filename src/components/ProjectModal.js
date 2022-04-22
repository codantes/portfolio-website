import React from 'react';
import './projectModal.css';
const ProjectModal = (props) => {
    const [modal, setModal] = React.useState(false);
    const displayModal = () => {
        setModal(!modal);
    }
    return ( 
        <div className="project-modal">
            <div className="display-card">
                <img className='project-img' src={props.img} alt="" />
                <div className="overlay-1" onClick={displayModal}>
                    <h3 >click to view</h3>
                </div>
            </div>
            {
                (modal) &&
                <section className="modal">
                <article>
                    <nav><img onClick={displayModal} src="/images/close.png" alt="" /></nav>
                    <h2>{props.title}</h2>
                    <section className="abt-project">
                        <p>{props.info}</p>
                        <p className='tech-stack'>This is the tech I used for the build:
                            <ul>
                                {props.techStack.map(tech => {
                                return(
                                    <li>{tech}</li>
                                )
                            })}</ul>
                        </p>
                        <p className='upcoming'>
                            upcoming features:
                            <ul>
                                {
                                    props.upcoming.map(feature => {
                                        return (
                                            <li>{feature}</li>
                                        )
                                    })
                                }
                            </ul>
                        </p>
                        <section className='site-links'>
                            <a href={props.siteLink}>Visit live site</a>   
                            <a href={props.github}>Github</a>
                        </section>
                    </section>
                </article>
                <div className="overlay-2"></div>
                </section>
            }
        </div>
     );
}
 
export default ProjectModal;