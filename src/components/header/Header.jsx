import React, { useState } from 'react';
import "./header.css";

const Header = () => {
   
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport,add the show-header class to a tag with the header tag
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    /*=============== TOGGLE MENU ===============*/
    const[Toggle, showMenu] = useState(false);
    const[activeNav,setActiveNav] = useState("#home");
    const[workDropdown, setWorkDropdown] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    <span className="nav__logo">Yashvi</span>
                </a>

                <div className={Toggle ? "nav__menu show-menu":"nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link"></a>
                                <i className="uil uil-estate nav__icon"></i> Home                           
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__lin active-linkk"></a>
                                <i className="uil uil-user nav__icon"></i>About                            
                        </li>

                        <li className="nav__item">
                            <a href="#project" className="nav__link active-link"></a>
                                <i className="uil uil-file-alt nav__icon"></i> Project                          
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link active-link"></a>
                                <i className="uil uil-message nav__icon"></i> Contact                           
                        </li>
                        
            
                    </ul>
                    <li class = "uil uil-times nav__close" onClick={() => showMenu
                (!Toggle)}></li>

                </div>
                
                <div className="nav__toggle" onClick={() => showMenu
                (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>

            </nav>
        </header>
  );
};

export default Header
