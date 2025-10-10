import WebsiteImage from '../../assets/website.png';
import ToDoList from '../../assets/todolist.png';
import Mood from '../../assets/moodtracking.png';
import Weather from '../../assets/weather.png';

export const projectsData = [
    {
        id: 1,
        title: "Personal Website",
        titleBreak: "Personal <br /> Website",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/Portfolio",
        image: WebsiteImage,
        description: "Crafted a dynamic and responsive personal website, showcasing my skills, projects, and passion for innovation.",
        technologies: ["React"]
    },
    {
        id: 2,    
        title: "To-Do List",
        titleBreak: "To-Do <br /> List",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/To-Do-List",
        image:ToDoList ,
        description: "Developed a dynamic and user-friendly To-Do List web application using the Python Django framework. This application serves as an efficient task management tool, allowing users to seamlessly organize and track their daily activities.",
        technologies: ["Python","Django","HTML"]
    },
    {
        id: 3,
        title: "Mental Health &  Mood Tracking App",
        titleBreak: " Mood Tracking <br /> App",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/Mental-Health-Mood-Tracking-App",
        image: Mood,
        description: "Mood Menders is a web app designed to make mental-health support accessible and practical. Built from user and clinician interviews, it combines mood tracking, journaling, guided meditation, resource directories, and therapist booking to support daily well-being. The platform lowers barriers to care with clear guidance, privacy-first design, and actionable insights.",
        technologies: ["Django","React","JavaScript","Mysql"]
    },

    {
        id: 4,
        title: "Weather App ",
        titleBreak: " Weather <br /> App",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/Weather-App",
        image: Weather,
        description: "I designed and implemented a versatile Weather Application using the Python Tkinter library, providing users with real-time weather information for different locations. This application seamlessly integrates multiple functionalities, including displaying the current time, temperature, humidity, and weather conditions.",
        technologies: ["Python","Tkinter"]
    },
];