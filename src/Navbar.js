import React from 'react';

function Navbar() {
    return(
        <nav className='topnav'>
            <img className='logo' src="/images/logo.png" alt="" />
            <ul className='main-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li><button>Contact me</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;