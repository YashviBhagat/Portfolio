import React from 'react';
import './qualification.css';

const qualifications = [
  {
    title: 'Master of Science in Computer Science',
    school: 'University of North Texas, USA',
    period: '2024 - 2026',
    
  },
  {
    title: 'Bachelor of Science in Computer Science',
    school: 'Gujarat Technological University, India',
    period: '2019 - 2022',
    
  },
  {
    title: 'Diploma of Computer Engineering',
    school: 'Gujarat Technological University, India.',
    period: '2016 - 2019',
    
  },
  
];

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            {qualifications.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div className="qualification__data" key={index}>
                  {isLeft ? (
                    <>
                      <div className="qualification__info">
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.school}</span>
                        <h3 className="qualification__title">{item.GPA}</h3>
                       
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {item.period}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        {index !== qualifications.length - 1 && <span className="qualification__line"></span>}
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        {index !== qualifications.length - 1 && <span className="qualification__line"></span>}
                      </div>
                      <div className="qualification__info">
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.school}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {item.period}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
