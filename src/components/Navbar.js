import React from 'react';
import './Navbar.css';

function Navbar() {
    const [screenWidth , setScreenWidth] = React.useState(window.innerWidth)
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
        </nav>
    )
}

export default Navbar;