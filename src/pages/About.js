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
                    My name is Kyle Jones! I am a student at UC Irvine looking pursuing a
                    career as a programmer. My relationship with computers goes back to the
                    early days of my childhood. I was always using the family computer when
                    I was a kid - so much so that my mom had to put a time limit on my computer
                    usage! This love for computers has only grown stronger as I've grown up, and
                    learning more about them is a passion of mine. It is this passion that has led me
                    on the path to become a professional programmer.
                    </p>

                <p>
                    I have studied computer science in pursuit of my passion for computers. I recieved an
                    Associate's Degree in computer science in 2018 from Irvine Valley College. I really enjoyed
                    learning the different languages during the program. Sadly, the program only covered the basics
                    of a lot of the languages. I was left with a desire to learn more after I had graduated, thus I
                    joined the UC Irvine Coding Bootcamp to hone my skills, learn more coding languages, and
                    hopefully
                    set me on the path to become a professional programmer!
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