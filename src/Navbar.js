import React from 'react';

function Navbar() {
    const [menu, setMenu] = React.useState(false);
    return(
        <nav className='topnav'>
            <div className='logo'>
                <h1>Pranav</h1>
            </div>
            {
                (menu) &&
                <ul className='main-menu'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li><button>Contact me</button></li>
                </ul>
            }
            <img className='menu-icon' src="/images/white-menu.svg" alt="" />
        </nav>
    )
}

export default Navbar;