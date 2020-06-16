import React from 'react';

function Contact() {
    return (
        <div className="row border content">
            <div className='col-12'>
                <h2>My Information</h2>
                <p>
                    <a style={{ color: "#666666" }} rel="noopener noreferrer" target="_blank" href="mailto:kylemj@uci.edu">
                        <i className="fas fa-envelope-square fa-2x"></i>
                    </a>
                    <a className="ml-2" style={{ color: "#4aaaa5" }} href="mailto:Kylemj018@gmail.com">Kylemj018@gmail.com</a>
                </p>

                <p>
                    <a style={{ color: "#666666" }} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kyle-jones-049b61111/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a className="ml-2" style={{ color: "#4aaaa5" }} href="https://www.linkedin.com/in/kyle-jones-049b61111/">https://www.linkedin.com/in/kyle-jones-049b61111/</a>
                </p>

                <p>
                    <a style={{ color: "#666666" }} rel="noopener noreferrer" target="_blank" href="https://github.com/kyle074613">
                        <i className="fab fa-github-square fa-2x"></i>
                    </a>
                    <a className="ml-2" style={{ color: "#4aaaa5" }} href="https://github.com/kyle074613">https://github.com/kyle074613</a>
                </p>
            </div>
        </div>
    )
}

export default Contact;