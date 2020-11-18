import React from 'react';
import './AboutSection.css';
import ProfilePic from './logoImages/profPIC.jpg';

const AboutSection = () => {
    return(
        <div className="AboutSection">
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="lead">Hi, I'm a Computer Science student attending UC Davis and currently pursuing a career in software development</p>
                <br></br>
                <br></br>
                <br></br>

                <div className="aboutSubtext">
                    <h1 className= "boldedTitle">About Me</h1>
                    <img className="profilePicFormatting" src={ProfilePic} alt="Profile Picture"/>
                    <p><span className="boldedText">Origin:</span> Santa Clara, CA</p>
                    <p><span className="boldedText">Education:</span> University of California Davis</p>
                    <p><span className="boldedText">Expected Graduation:</span> 2021</p>
                    <p><span className="boldedText">Email:</span>
                        <a target="_blank" href="mailto:aimohammed@ucdavis.edu"> aimohammed@ucdavis.edu</a>
                    </p>
                    <p><span className="boldedText">Resume:</span>
                        <a target="_blank" href="https://drive.google.com/file/d/1MlvQ6sOAeCa0z6-NsxaP_3y9ZfmW62gD/view?usp=sharing"> My Resume</a>
                    </p>
                    <p><span className="boldedText">Linkedin: </span>
                        <a target="_blank" href="https://www.linkedin.com/in/abdullah-mohammed-547b25176/">Linkedin</a>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AboutSection;