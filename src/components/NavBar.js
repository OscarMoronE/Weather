import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className='navbar bg-dark text-light mb-5 pt-3'>
            <div className='container-fluid'>
                <h3 className='mx-auto'>Today's Weather <FontAwesomeIcon icon={faCloudSun} /> </h3>
            </div>
        </nav>
    )
}

export default NavBar
