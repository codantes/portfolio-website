import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = React.useState(false);
    const [screenWidth , setScreenWidth] = React.useState(window.innerWidth)
    function menuSwitch() {
        return setMenu(!menu);
    }
    React.useEffect(() => {
        
        function changeWidth() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);
    }, [])

    return(
        <nav className='topnav'>
            <div className='logo'>
                <h1>Pranav</h1>
            </div>
            {
                ((menu)||(screenWidth > 900)) &&
                <div className="overlay">
                <ul className='main-menu'>
                    <li>
                        <Link onClick={menuSwitch} to="hero" smooth={true} duration={1000}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={menuSwitch} to="about" smooth={true} duration={1100}>About</Link>
                    </li>
                    <li>
                        <Link onClick={menuSwitch} to="projects" smooth={true} duration={1200}>projects</Link>
                    </li>
                    <li>
                        <Link onClick={menuSwitch} to="contact" smooth={true} duration={1300}><button>Let's Connect</button></Link>
                    </li>
                </ul>
                </div>
            }
            <img onClick={menuSwitch} className='menu-icon' src="/images/white-menu.svg" alt="" />
        </nav>
    )
}

export default Navbar;