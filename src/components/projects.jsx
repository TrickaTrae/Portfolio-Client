import React from "react";
import "../styles/animations.css"
import "../styles/projects.css";

const Projects = props => {
  return (
    <div id="projects" className="d-flex align-items-center justify-content-start pt-5 pb-5" ref={props.projRef}>
        <div className="container">

            <div className="row">
                <div className="col-12 pb-3">
                    <h1 className="text-white">Recent Projects</h1>
                </div>
                <div className="col-12 pb-4">
                    <div className="border-top border-info w-50"></div>
                </div>
            </div>

            <div className="row">
                {
                    props.projects.filter(project => project.disabled === false).map((project, key) => {
                        return (
                            <div className="col-12 col-sm-6 pt-3 pb-3 project-col" key={key}>
                                <div className="position-relative h-100 w-100 project-div">
                                    <img src={project.image} className="project-image position-absolute h-100 w-100" alt="project pic"/>
                                    <div className="position-absolute h-100 w-100 p-4 project-info-div">
                                        <h2 className="text-white">{project.title}</h2>
                                        <div className="border-top border-info w-25 mt-3 mb-3"></div>
                                        <h5 className="text-white project-desc">{project.description}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
  );
};
export default Projects;
