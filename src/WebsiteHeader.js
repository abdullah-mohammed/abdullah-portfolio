import React from 'react';
import './WebsiteHeader.css';

const WebsiteHeader = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid col-10">
                <a className="navbar-brand" href="#">Abdullah Mohammed</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse dropdownContainer" id="navbarNavDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">About Me</a>
                            <a className="dropdown-item" href="#ResumeSection">Resume</a>
                            <a className="dropdown-item" href="#ProjectSection">Projects</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default WebsiteHeader;