import React, { useState } from 'react';
import "./project.css"

const Project = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab=(index) => {
        setToggleState(index);
    }

  return (
    <section className="project section" id="project">
        <h2 className="section__title">Some Thing I've Built</h2>
        <span className="section__subtitle">Projects</span>

        <div className="project__container container grid">
            <div className="project__content">
                <div>
                    
                    <i className="uil uil-web-grid project__icon"></i>
                    <h3 className="project__title">
                        Personal <br /> Website <i class="uil uil-github-alt project__icon2"></i>
                        
                    </h3>
                </div>
                <span className="project__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right project__button-icon">
                    </i></span>
                <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                        <h3 className="project__modal-title">Personal Website</h3>
                        <p className="project__modal-description">Crafted a dynamic and responsive personal website, showcasing my skills, projects, and passion for innovation.</p>
                        <p className="project__modal-sub">React</p>

                    </div>
                </div>
            </div>

            <div className="project__content">
                <div>
                    <a href="https://github.com/YashviBhagat/ecommerce-website">
                        <i className="uil uil-arrow project__icon"></i>
                        <h3 className="project__title">
                        E-commerce <br /> Website <i class="uil uil-github-alt project__icon2"></i>
                        </h3>
                        
                    </a>
                </div>
                <span onClick={() => toggleTab(2)} className="project__button">View More  <i className="uil uil-arrow-right project__button-icon">
                    </i></span>
                <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                        <h3 className="project__modal-title">E-commerce Website</h3>
                        <p className="project__modal-description">Developed a robust e-commerce platform, ensuring a smooth user journey through intuitive shopping cart management, and enhancing security with integrated PayPal and credit card payment options.</p>
                        <p className="project__modal-sub">Python JavaScript</p>
                        
                    </div>
                </div>
            </div>


            <div className="project__content">
                <div>
                    <i className="uil uil-sorting project__icon"></i>
                    <h3 className="project__title">
                    Sorting <br />  Visualizer <i class="uil uil-github-alt project__icon2"></i>
                    </h3>
                </div>
                <span onClick={() => toggleTab(3)} className="project__button">View More <i className="uil uil-arrow-right project__button-icon">
                    </i></span>
                <div className={toggleState === 3 ? "project__modal active-modal" : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                        <h3 className="project__modal-title">Sorting Visualizer</h3>
                        <p className="project__modal-description">Engineered a captivating sorting visualization, highlighting adept front-end expertise, featuring an intuitive interface that visually represents real-time sorting algorithms.
                        </p>
                        <p className="project__modal-sub">React</p>
                    </div>
                </div>
            </div>


            <div className="project__content">
                <div>
                    <a href="https://github.com/YashviBhagat/To-Do-List">
                        <i className="uil uil-notes project__icon"></i>
                        <h3 className="project__title">
                        To-Do <br /> List <i class="uil uil-github-alt project__icon2"></i>
                        </h3>
                    </a>
                </div>
                <span onClick={() => toggleTab(4)} className="project__button">View More <i className="uil uil-arrow-right project__button-icon">
                    </i></span>
                <div className={toggleState === 4 ? "project__modal active-modal" : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                        <h3 className="project__modal-title">To-Do List</h3>
                        <p className="project__modal-description">Built a dynamic To-Do List web app, empowering users to effortlessly organize and track daily tasks for enhanced productivity and efficiency.</p>
                        <p className="project__modal-sub">Python</p>
                    </div>
                </div>
            </div>

            <div className="project__content">
                <div>
                    <a href="https://github.com/YashviBhagat/weather-app">
                        <i className="uil uil-clouds project__icon"></i>
                        <h3 className="project__title">Weather <br /> Application <i class="uil uil-github-alt project__icon2"></i>
                        </h3>
                    </a>
                </div>
                <span onClick={() => toggleTab(5)} className="project__button">View More <i className="uil uil-arrow-right project__button-icon">
                    </i></span>
                <div className={toggleState === 5 ? "project__modal active-modal" : "project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>
                        <h3 className="project__modal-title">Weather Application</h3>
                        <p className="project__modal-description">Designed and implemented a feature-rich Weather Application, offering real-time weather updates, including current time, temperature, humidity, and conditions for diverse locations.</p>
                        <p className="project__modal-sub">Python</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Project
