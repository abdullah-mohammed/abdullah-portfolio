import React from 'react';
import './ProjectSection.css';
import USPSMailbox from './logoImages/USPSMailbox.png';
import RPGLogo from './logoImages/FFMage.png';
import Monopoly from './logoImages/monopolyman.png';
import ScrollableAnchor from 'react-scrollable-anchor';

const ProjectSection = () => {
    return(
        <ScrollableAnchor id={'ProjectSection'}>
        <div className="ProjectSection">
            <p className="projectPageTitle">Projects</p>
            <br></br>
            <div className="container row mx-auto justify-content-center">
                <div className="card mt-2" style={{width: '23rem'}}>
                    <a target="_blank" href="https://www.mailboxmap.com/">
                        <img className="card-img-top" src={USPSMailbox} alt="USPS Mailbox"/>
                    </a>

                        <div className="card-body">
                            <p className="card-text">
                                <b>Mailbox Map </b>
                                Wrote backend code in Python that scrapes websites for zip codes and uses URL decoding and encoding to obtain the coordinates of post offices in a 50 mile radius
                            </p>
                        </div>
                </div>

                <div className="card ml-4 mt-2" style={{width: '23rem'}}>
                    <img className="card-img-top" src={RPGLogo} alt="Video Game Logo"/>
                    <div className="card-body">
                        <p className="card-text">
                            <b>Turn Based RPG Game </b>
                            Built a turn-based RPG with a graphical interface using Java
                        </p>
                    </div>
                </div>

                <div className="card ml-4 mt-2" style={{width: '20rem'}}>
                    <img className="card-img-top" src={Monopoly} alt="Monopoly Man"/>
                    <div className="card-body">
                        <p className="card-text">
                            <b>Text Based Monopoly </b>
                            Built a text based version of Monopoly using C++ where users can move around the board, purchase properties, etc.
                        </p>
                    </div>
                </div>


            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>


        </div>
        </ScrollableAnchor>
    );
}

export default ProjectSection;