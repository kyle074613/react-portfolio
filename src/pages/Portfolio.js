import React from 'react';
import Project from '../components/Project';
import eatDaBurgerImage from '../assets/images/EatDaBurgerScreenshot.PNG';
import BudgetTrackerImage from '../assets/images/BudgetTracker.PNG';
import FitnessTrackerImage from '../assets/images/FitnessTracker.PNG';
import NoteTakerImage from '../assets/images/NoteTaker.PNG';
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
                        name="Eat Da Burger"
                        image={eatDaBurgerImage}
                        site="https://blooming-escarpment-01798.herokuapp.com/"
                        github="https://github.com/kyle074613/burger"
                    />
                    <Project
                        key={1}
                        name="Online/Offline Budget Tracker"
                        image={BudgetTrackerImage}
                        site="https://morning-chamber-52364.herokuapp.com/"
                        github="https://github.com/kyle074613/online-offline-budget-tracker"
                    />
                </div>

                <div className="row my-3">
                    <Project
                        key={2}
                        name="Workout Tracker"
                        image={FitnessTrackerImage}
                        site="https://workout-tracker-bootcamp-app.herokuapp.com/"
                        github="https://github.com/kyle074613/workout-tracker"
                    />
                    <Project
                        key={3}
                        name="Note Taker"
                        image={NoteTakerImage}
                        site="https://afternoon-forest-27151.herokuapp.com/"
                        github="https://github.com/kyle074613/note-taker"
                    />
                </div>

                <div className="row my-3">
                    <Project
                        key={4}
                        name="Group Project 2"
                        image={Project2Image}
                        site="https://sleepy-dusk-04483.herokuapp.com/html"
                        github="https://github.com/hollyisaredhead/project2"
                    />
                    <Project
                        key={5}
                        name="Group Project 1"
                        image={Project1Image}
                        site="https://tnowlan101.github.io/tnowlan101.github.io-Project1/"
                        github="https://github.com/tnowlan101/tnowlan101.github.io-Project1"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;