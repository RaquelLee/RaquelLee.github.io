import React from "react";

function ProjectCard(props) {
    return (
        <div className="col m6">
            <div className="card z-depth-3 small">
                <div className="card-image responsive-img">
                    
                    <img alt={props.title} src={props.image}></img>
                </div>
                <div className="card-content">
                    <span className="card-title center"><b>{props.title}</b></span>
                    <div className="card-action center">
                        <a href={props.github}>
                            <i className="center fab fa-github-square"></i>
                        </a>
                        <a href={props.deployed}>
                            <i className="valign-center fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;