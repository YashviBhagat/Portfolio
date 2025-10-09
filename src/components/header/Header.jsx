// import React, { useState, useEffect } from 'react';
// import './header.css';

// const Header = () => {
//   const [Toggle, showMenu] = useState(false);
//   const [activeNav, setActiveNav] = useState('#home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector('.header');
//       if (window.scrollY >= 80) {
//         header.classList.add('scroll-header');
//       } else {
//         header.classList.remove('scroll-header');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="header">
//       <nav className="nav container">
//         <a href="#home" className="nav__logo">
//           <div className="hexagon-logo">
//             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//               <polygon
//                 points="50 5, 93.3 27.5, 93.3 72.5, 50 95, 6.7 72.5, 6.7 27.5"
//                 fill="none"
//                 stroke="#19183B"
//                 strokeWidth="3"
//               />
//               <text x="50" y="63" textAnchor="middle">Y</text>
//             </svg>
//           </div>
//         </a>

//         <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
//           <ul className="nav__list grid">
//             <li className="nav__item">
//               <a
//                 href="#home"
//                 onClick={() => setActiveNav('#home')}
//                 className={`nav__link ${activeNav === '#home' ? 'active-link' : ''}`}
//               >
//                 Home
//               </a>
//             </li>

//             <li className="nav__item">
//               <a
//                 href="#skills"
//                 onClick={() => setActiveNav('#skills')}
//                 className={`nav__link ${activeNav === '#skills' ? 'active-link' : ''}`}
//               >
//                 Skills
//               </a>
//             </li>

//             <li className="nav__item">
//               <a
//                 href="#qualification"
//                 onClick={() => setActiveNav('#qualification')}
//                 className={`nav__link ${activeNav === '#qualification' ? 'active-link' : ''}`}
//               >
//                  Qualification
//               </a>
//             </li>

//             <li className="nav__item">
//               <a
//                 href="#project"
//                 onClick={() => setActiveNav('#project')}
//                 className={`nav__link ${activeNav === '#project' ? 'active-link' : ''}`}
//               >
//                  Projects
//               </a>
//             </li>

//             <li className="nav__item">
//               <a
//                 href="#contact"
//                 onClick={() => setActiveNav('#contact')}
//                 className={`nav__link ${activeNav === '#contact' ? 'active-link' : ''}`}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <div className="nav__close" onClick={() => showMenu(!Toggle)}>
//             <i className="uil uil-times"></i>
//           </div>
//         </div>

//         <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
//           <i className="uil uil-apps"></i>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <div className="hexagon-logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="50 5, 93.3 27.5, 93.3 72.5, 50 95, 6.7 72.5, 6.7 27.5"
                fill="none"
                stroke="#19183B"
                strokeWidth="3"
              />
              <text x="50" y="63" textAnchor="middle">Y</text>
            </svg>
          </div>
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeNav === '#home' ? 'active-link' : ''}`}
              >
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeNav === '#skills' ? 'active-link' : ''}`}
              >
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                className={`nav__link ${activeNav === '#qualification' ? 'active-link' : ''}`}
              >
                Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#project"
                className={`nav__link ${activeNav === '#project' ? 'active-link' : ''}`}
              >
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeNav === '#contact' ? 'active-link' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-times"></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
