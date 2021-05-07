import React from 'react';
import MyPic from '../assets/images/Pic.jpg'

function About() {
    return (
        <div className="row border content">
            <div className="col-12">
                <h2>About Me</h2>

                <div className="col-md-5 col-12 p-0 mr-3 mb-3 mb-md-0 float-left">
                    <img src={MyPic} className="img-fluid w-100" alt="Kyle" />
                </div>

                <p>
                    My name is Kyle Jones! I am a recent graduate from UC Irvine looking pursuing a
                    career as a web developer. My relationship with computers goes back to the
                    early days of my childhood. I was always using the family computer when
                    I was a kid - so much so that my mom had to put a time limit on my computer
                    usage! This love for computers has only grown stronger as I've grown up, and
                    learning more about them is a passion of mine. It is this passion that has led me
                    on the path to become a professional web developer.
                    </p>

                <p>
                    I recently graduated from the UC Irvine Coding Bootcamp, gaining skills in Full Stack Web Development.
                    Through this program, I became proficient in web development languages and skills such as
                    Javascript, HTML, CSS, MERN stack development, and MySQL. In addition to this, I have a background in computer science.
                    I recieved an
                    Associate's Degree in computer science in 2018 from Irvine Valley College. I really enjoyed
                    learning the different languages during the program.
                    </p>

                <p>
                    On a more personal note, I love dogs. Back in 2014, I adopted my first ever dog, Harley.
                    She was just two months old when I got her and we have been inseparable since. I think
                    she is part Jack Russell Terrier and part Chihuahua, but I do not know for sure. Aside from
                    my dog, I love playing video games, playing guitar, and hanging out with my friends.
                    </p>
            </div>
        </div>
    )
}

export default About;