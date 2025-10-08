import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Eduction
                </div>
            </div>

        
            <div className="qualification__sections">
                <div className="qualification__content">

                <div className="qualification__data">
                <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    <div>
                        <h3 className="qualification__title">Master of Science in Computer Science</h3>
                        <span className="qualification__subtitle">University of North Texas, USA</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  2024 - 2026
                        </div>
                    </div>
                    
                </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Science in Computer Science</h3>
                            <span className="qualification__subtitle">Gujarat Technological University, India
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Diploma of Computer Engineering</h3>
                            <span className="qualification__subtitle">Gujarat Technological University, India.
                                </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2019
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification
