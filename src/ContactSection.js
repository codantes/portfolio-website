import React from 'react';

function ContactSection() {
    return(
        <section className='contact' id='contact'>
            <h1 className="section-title">Let's Connect!</h1>
            <article>
            <div className='social-icons'>
                <a href="https://www.linkedin.com/in/pranav-kumar-311574162/">
                    <img src="/images/linkedin-round.svg" alt="" />
                </a>
                <p>LinkedIn</p>
            </div>

            <div className='social-icons'>
                <a href="https://twitter.com/codantes">
                    <img src="/images/twitter-round.svg" alt="" />
                </a>
                <p>twitter</p>
            </div>

            <div className='social-icons'>
                <a href="https://github.com/codantes">
                    <img src="/images/github.svg" alt="" />
                </a>
                <p>Github</p>
            </div>

            <div className='social-icons'>
                <a href="mailto:pranavismic@gmail.com">
                    <img src="/images/email-round.svg" alt="" />
                </a>
                <p>email</p>
            </div>
            </article>
        </section>
    )
}

export default ContactSection;