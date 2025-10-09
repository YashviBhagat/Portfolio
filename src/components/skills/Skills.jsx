import React from 'react';
import './skills.css';

const skillsData = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'OpenCV'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['GitHub', 'AWS (Web Services)', 'Tableau', 'PowerBI', 'Microsoft Copilot', 'OpenAI'],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical toolbox</span>

      <div className="skills__container container grid">
        {skillsData.map((category, index) => (
          <div className="skills__content" key={index}>
            <h3 className="skills__title">{category.title}</h3>
            <div className="skills__box single-column">
              <div className="skills__group">
                {category.skills.map((skill) => (
                  <div className="skills__data" key={skill}>
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills__name">{skill}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
