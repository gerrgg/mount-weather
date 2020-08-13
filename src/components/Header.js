import React from 'react'
import '../sass/header.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCode, faMeteor } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gerrgg/react-to-weather">
                            <FontAwesomeIcon icon={faCode} style={ { paddingRight: '.5rem' } } />
                            Source Code
                        </a>
                    </li>
                    <li>
                        <a href="/" className="logo">
                            <FontAwesomeIcon icon={faMeteor} style={ { fontSize: '2rem' } } /><br></br>
                            React to Weather
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://gerrgg.github.io/resume/">
                            Resume
                            <FontAwesomeIcon icon={faCoffee} style={ { paddingLeft: '.5rem' } } />
                            
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header