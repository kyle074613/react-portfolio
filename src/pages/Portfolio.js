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
                        description="A place to hang out with your friends online. Users can watch youtube videos and chat together in real time."
                        site="https://so-pan.herokuapp.com/"
                        github="https://github.com/hollyisaredhead/sopan"
                    />
                    <Project
                        key={1}
                        name="Trip Buddy"
                        image={Project1Image}
                        description="Travel app to help users plan their trips. Gives user a map of a route along with driving directions, as well as restaurants and activities to check out at their destination."
                        site="https://tnowlan101.github.io/tnowlan101.github.io-Project1/"
                        github="https://github.com/tnowlan101/tnowlan101.github.io-Project1"
                    />
                </div>

                <div className="row my-3">
                    <Project
                        key={2}
                        name="Project X"
                        image={Project2Image}
                        description="A tool to help new web developers learn. Users have access to tutorial videos on web development languages, can ask questions, and look for solutions via Stack Overflow."
                        site="https://sleepy-dusk-04483.herokuapp.com/html"
                        github="https://github.com/hollyisaredhead/project2"
                    />

                    <Project
                        key={3}
                        name="Google Books Search"
                        image={GoogleBooksSearchImage}
                        description="Users can search for books via Google Books and save them to a list to look at later on Google Books. Created using React.js."
                        site="https://glacial-temple-14829.herokuapp.com/"
                        github="https://github.com/kyle074613/google-books-search"
                    />
                </div>

                <div className="row my-3">
                    <Project
                        key={4}
                        name="Online/Offline Budget Tracker"
                        image={BudgetTrackerImage}
                        description="Budget tracking application that can be used either online or offline. Offline activity is updated once the user goes back online."
                        site="https://morning-chamber-52364.herokuapp.com/"
                        github="https://github.com/kyle074613/online-offline-budget-tracker"
                    />
                    <Project
                        key={5}
                        name="Workout Tracker"
                        image={FitnessTrackerImage}
                        description="This website allows users keep track of workouts and total workout duration, distances, weight lifted, etc. Made with MongoDB."
                        site="https://workout-tracker-bootcamp-app.herokuapp.com/"
                        github="https://github.com/kyle074613/workout-tracker"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;