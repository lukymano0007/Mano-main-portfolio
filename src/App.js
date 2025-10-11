// App.js
import React from "react";
import "./App.css";
import profileImg from "./assets/fghjfg (2).png"; // replace with your actual profile image
import projectsData from "./data/projects"; // optional: if you have project info in a JS file

function App() {
  return (
    <div className="App" data-testid="app-root">
      {/* Header / Hero Section */}
      <header className="App-header">
        <img
          src={profileImg}
          className="profile-img"
          alt="Profile"
        />
        <h1>Hi, I'm Mano</h1>
        <p>Web Developer | Frontend Developer | Designer</p>
        <button className="btn contact-me">Contact Me</button>
      </header>

      {/* Projects Section */}
      <section className="projects" data-testid="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData &&
            projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
        </div>
      </section>

      {/* Navigation / Page Flip Buttons */}
      <div className="page-controls">
        <button className="nextprev-btn" data-page="page1">
          Next
        </button>
        <button className="nextprev-btn" data-page="page1">
          Prev
        </button>
      </div>
    </div>
  );
}

export default App;
