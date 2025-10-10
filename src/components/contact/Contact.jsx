// Contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container">
                <div className="contact__cards">
                    {/* Gmail Card */}
                    <div className="contact__card">
                        <i className="uil uil-envelope contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data"> yashvib1631@gmail.com </span>
                        <a href="mailto:yashvib1631@gmail.com" className="contact__button">
                            Send Email <i className="uil uil-arrow-right contact__button-icon"></i>
                        </a>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="contact__card">
                        <i className="uil uil-linkedin contact__card-icon"></i>
                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Connect with me</span>
                        <a 
                            href="https://www.linkedin.com/in/yashvi-bhagat-6480951b9"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact__button"
                        >
                            View Profile <i className="uil uil-arrow-right contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;