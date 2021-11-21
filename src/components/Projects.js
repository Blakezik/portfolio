import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../mydata"

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="projects-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
