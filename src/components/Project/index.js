import React from 'react';

function Project(props) {
    return (
        <div className="col-md-6 col-12">
            <div className="card">
                <img className="card-img-top" src={props.image} alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <a href={props.site} className="card-link">Go To App</a>
                    <a href={props.github} className="card-link">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Project;