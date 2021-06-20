import React from "react";
import { Parallax } from 'react-materialize';
import ProjectCard from "../Project";
import projects from "../projects.json";
import galaxy from "../../assets/images/parallax2.jpeg"

const PortfolioPage = () => (
    <main>
        <div className="section white">
            <div className="row container">
                <h2 className="deep-purple-text darken-4">Portfolio</h2>
                {projects.map(project => (
        <ProjectCard
          key={project.key}
          image={project.image}
          title={project.title}
          github={project.github}
          deployed={project.deployed}
        />))}
            </div>
        </div>
        <Parallax
            image={<img alt=""
                 src={galaxy}/>}
            options={{
                responsiveThreshold: 0
            }}></Parallax>
    </main>
);

export default PortfolioPage;