import React from 'react';
import Project from '../components/Project';
import SopanImage from "../assets/images/SoPan.PNG";
import BudgetTrackerImage from '../assets/images/BudgetTracker.PNG';
import FitnessTrackerImage from '../assets/images/FitnessTracker.PNG';
import GoogleBooksSearchImage from '../assets/images/GoogleBooksSearch.PNG';
import Project1Image from '../assets/images/Project1.PNG';
import Project2Image from '../assets/images/Project2.PNG';

function Portfolio() {
    return (
        <div className="row border content">
            <div className="col-12">
                <h2>Portfolio</h2>
                <div className="row my-3">
                    <Project
                        key={0}
                        name="SoPan"
                        image={SopanImage}
                        site="https://so-pan.herokuapp.com/"
                        github="https://github.com/hollyisaredhead/sopan"
                    />
                    <Project
                        key={1}
                        name="Trip Buddy"
                        image={Project1Image}
                        site="https://tnowlan101.github.io/tnowlan101.github.io-Project1/"
                        github="https://github.com/tnowlan101/tnowlan101.github.io-Project1"
                    />
                </div>

                <div className="row my-3">
                    <Project
                        key={2}
                        name="Project X"
                        image={Project2Image}
                        site="https://sleepy-dusk-04483.herokuapp.com/html"
                        github="https://github.com/hollyisaredhead/project2"
                    />

                    <Project
                        key={3}
                        name="Google Books Search"
                        image={GoogleBooksSearchImage}
                        site="https://glacial-temple-14829.herokuapp.com/"
                        github="https://github.com/kyle074613/google-books-search"
                    />
                </div>

                <div className="row my-3">
                    <Project
                        key={4}
                        name="Online/Offline Budget Tracker"
                        image={BudgetTrackerImage}
                        site="https://morning-chamber-52364.herokuapp.com/"
                        github="https://github.com/kyle074613/online-offline-budget-tracker"
                    />
                    <Project
                        key={5}
                        name="Workout Tracker"
                        image={FitnessTrackerImage}
                        site="https://workout-tracker-bootcamp-app.herokuapp.com/"
                        github="https://github.com/kyle074613/workout-tracker"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;