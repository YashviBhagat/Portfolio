import React, { useState } from 'react';
import "./project.css";
import { projectsData } from './projectsData';
import { researchData } from './researchData';
import {
    SiPython, SiHtml5, SiCss3, SiJavascript, SiReact,
    SiMysql, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy,
    SiPandas,  SiPytorch, SiOpencv,SiDjango, SiFlask
     
  } from 'react-icons/si';
  
  import {
    FaJava, FaMicrosoft, FaAws, FaChartBar
  } from 'react-icons/fa';


const techIcons = {
    Python: <SiPython size={24} />,
    CSS : <SiCss3 size={24} />,
    HTML : <SiHtml5 size={24} />,
    JavaScript : <SiJavascript size={24} />,
    React : <SiReact size={24} />,
    Mysql : <SiMysql size={24} />,
    Tensorflow : <SiTensorflow size={24} />,
    Keras : <SiKeras size={24} />,
    Scikitlearn : <SiScikitlearn size={24} />,
    Pandas : <SiPandas size={24} />,
    Numpy : <SiNumpy size={24} />,
    Pytorch : <SiPytorch size={24} />,
    Opencv : <SiOpencv size={24} />,
    Java: <FaJava size={24} />,
    Copilot: <FaMicrosoft size={24} />,
    Django: <SiDjango size={24} />,
    Flask: <SiFlask size={24} />,
    PowerBI: <FaChartBar size={24} />,
    AWS: <FaAws size={24} />,
    
    
    
    
    
};

const Project = () => {
    const [toggleState, setToggleState] = useState(0);
    const [activeTab, setActiveTab] = useState(1);

    const activeData = activeTab === 1 ? projectsData : researchData;
    const activeItem = activeData.find(item => item.id === toggleState);

    const renderProjectCard = (item) => (
        <div className="project__content" key={item.id}>
            <div className="project__header">
                <div className="project__left">
                    <i className={`uil ${item.icon} project__icon`}></i>
                    <h3 
                        className="project__title"
                        dangerouslySetInnerHTML={{ __html: item.titleBreak }}
                    />
                </div>
                <div className="project__right">
                    {item.githubLink ? (
                        <a 
                            href={item.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project__github-link"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="uil uil-github-alt project__icon2"></i>
                        </a>
                    ) : (
                        <i className="uil uil-github-alt project__icon2"></i>
                    )}
                </div>
            </div>
            <span className="project__button" onClick={() => setToggleState(item.id)}>
                View More <i className="uil uil-arrow-right project__button-icon"></i>
            </span>
        </div>
    );

    return (
        <section className="project section" id="project">
            <h2 className="section__title">Some Thing I've Built</h2>
            <span className="section__subtitle">Projects</span>

            <div className="project__tabs">
                <div 
                    className={activeTab === 1 ? "project__tab active-tab" : "project__tab"}
                    onClick={() => setActiveTab(1)}
                >
                    <i className="uil uil-briefcase-alt project__tab-icon"></i> Projects
                </div>
                <div 
                    className={activeTab === 2 ? "project__tab active-tab" : "project__tab"}
                    onClick={() => setActiveTab(2)}
                >
                    <i className="uil uil-book-open project__tab-icon"></i> Research Work
                </div>
            </div>

            <div className={activeTab === 1 ? "project__container container grid active-content" : "project__container container grid"}>
                {projectsData.map(project => renderProjectCard(project))}
            </div>

            <div className={activeTab === 2 ? "project__container container grid active-content" : "project__container container grid"}>
                {researchData.map(research => renderProjectCard(research))}
            </div>

            {/* Single modal outside the mapped cards */}
            {toggleState !== 0 && activeItem && (
                <div className="project__modal active-modal" onClick={() => setToggleState(0)}>
                    <div className="project__modal-content" onClick={(e) => e.stopPropagation()}>
                        <i onClick={() => setToggleState(0)} className="uil uil-times project__modal-close"></i>
                        <h3 className="project__modal-title">{activeItem.title}</h3>
                        <p className="project__modal-description">{activeItem.description}</p>
                        <div className="project__modal-sub" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            {activeItem.technologies.map((tech, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {techIcons[tech] || null}
                                <span>{tech}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;
