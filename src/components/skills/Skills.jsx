import React from 'react';
import './skills.css';

import {
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact,
  SiMysql, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy,
  SiPandas, SiTableau, SiPytorch, SiOpencv,
   SiGithub, SiOpenai
} from 'react-icons/si';

import {
  FaJava, FaMicrosoft, FaCode, FaAws, FaChartBar
} from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { icon: <SiPython />, name: 'Python' },
      { icon: <FaJava />, name: 'Java' },
      { icon: <FaCode />, name: 'C' },
      { icon: <FaCode />, name: 'C++' },
      { icon: <SiHtml5 />, name: 'HTML' },
      { icon: <SiCss3 />, name: 'CSS' },
      { icon: <SiJavascript />, name: 'JavaScript' },
      { icon: <SiReact />, name: 'React' },
      { icon: <SiMysql />, name: 'SQL' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { icon: <SiTensorflow />, name: 'TensorFlow' },
      { icon: <SiKeras />, name: 'Keras' },
      { icon: <SiScikitlearn />, name: 'Scikit-learn' },
      { icon: <SiNumpy />, name: 'NumPy' },
      { icon: <SiPandas />, name: 'Pandas' },
      { icon: <SiPytorch />, name: 'PyTorch' },
      { icon: <SiOpencv />, name: 'OpenCV' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { icon: <SiGithub />, name: 'GitHub' },
      
      { icon: <FaAws />, name: 'AWS' },
      { icon: <SiTableau />, name: 'Tableau' },
      { icon: <FaChartBar />, name: 'PowerBI' },
      { icon: <FaMicrosoft />, name: 'Copilot' },
      { icon: <SiOpenai />, name: 'OpenAI' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technologies I work with</span>

      <div className="skills__group-wrapper container">
        {skillGroups.map((group, index) => (
          <div className="skills__group-box" key={index}>
            <h3 className="skills__group-title">{group.title}</h3>
            <div className="skills__icon-grid">
              {group.skills.map((skill, i) => (
                <div className="skill__icon" key={i}>
                  {skill.icon}
                  <span className="skill__tooltip">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
