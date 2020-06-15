import React from 'react';

function Project(props) {
    return (
        <div className="col-md-6 col-12">
            <div className="card h-100">
                <img className="card-img-top" src={props.image} alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">Techologies: {props.technologies}</p>
                    <a href={props.site} rel="noopener noreferrer" target="_blank" className="card-link">Go To App</a>
                    <a href={props.github} rel="noopener noreferrer" target="_blank" className="card-link">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Project;