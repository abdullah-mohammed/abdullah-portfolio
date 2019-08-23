import React, {Component} from 'react';
import WebsiteHeader from "./WebsiteHeader";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import ProjectSection from "./ProjectSection";

class App extends Component{
  render() {
    return(
        <div>
          <WebsiteHeader/>
          <AboutSection/>
          <ResumeSection/>
          <ProjectSection/>
        </div>
    );
  }

}

export default App;
