import React from 'react';
import './ResumeSection.css';
import UCDavis from './logoImages/UCDavis.png';
import Incorta from './logoImages/incortaLogo.png';
import ScrollableAnchor from 'react-scrollable-anchor';

const ResumeSection = () => {
    return(
        <ScrollableAnchor id={'ResumeSection'}>
        <div className="ResumeSection">
            <p className="resumeTitle">Résumé</p>
            <div className="container">
                <p className="boldedResumeTitle">Education</p>
                <img className="logoIcon" src={UCDavis} alt="UC Davis Logo"/>
                <p>
                    <b>University of California Davis</b><span className="rightSection"><i>Graduating 2021</i></span>
                    <br></br>
                    <i>Computer Science, B.S, Senior Standing</i>
                    <br></br>
                    <br></br>
                    Relevant Coursework:
                </p>

                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Algorithm Design and Analysis</li>
                    <li>Software Development and Object Oriented Programming</li>
                    <li>Programming and Problem Solving</li>
                    <li>Computer Organization and Machine Dependant Programming</li>
                    <li>Database Systems</li>
                    <li>Operating Systems</li>
                </ul>

                <br></br>
                <br></br>
                <p className="boldedResumeTitle">Experience</p>
                <img className="logoIconRounded" src={Incorta} alt="Incorta Logo"/>
                <p>
                    <b>Incorta</b>
                    <span className="rightSection"><i>June 2018 - September 2018</i></span>
                    <br></br>
                    <i>Software Engineer Intern</i>
                    <span className="rightSection"><i>San Mateo, CA</i></span>
                    <br></br>
                    <br></br>
                    Comment Feature:
                </p>

                <ul>
                    <li>Used Java and SQL to build real time comment feature where users can comment on graphs</li>
                    <li>Added feature where users can click on comment to see state of graph when the comment was added</li>
                    <li>Added feature where users can tag other users and when they are tagged they receive a notification</li>
                </ul>

                <p>Incsql:</p>
                <ul>
                    <li>Developed command line interface using apache CLI and Java</li>
                    <li>Built feature where users can type, execute, and view SQL commands through the terminal</li>
                </ul>

                <br></br>
                <br></br>
                <p className="boldedResumeTitle">Skills</p>
                <ul>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Linux</li>
                </ul>


                <br></br>
                <br></br>
                <br></br>

            </div>
        </div>
        </ScrollableAnchor>
    );
}

export default ResumeSection;
