import React from 'react';
import js from '../img/js.png';
import css from '../img/css.png';
import html from '../img/html.png';
import react from '../img/react.png';

const Skills = () => (
  <div className="subsec">
    <h3 className="subsec__title">Skills</h3>
    <ul className="subsec__selections">
      <li className="subsec__selection">
        <img src={html} alt="" width={30} />
      </li>
      <li className="subsec__selection">
        <img src={css} alt="" width={30} />
      </li>
      <li className="subsec__selection">
        <img src={js} alt="" width={35} />
      </li>
      <li className="subsec__selection">
        <img src={react} alt="" width={35} />
      </li>
    </ul>
  </div>
);

const Places = () => (
  <div className="subsec">
    <h3 className="subsec__title">Places I have lived</h3>
    <ul className="subsec__selections">
      <li className="subsec__selection places japan">
        <span role="img" aria-label="Japan flag emoji" />
      </li>
      <li className="subsec__selection places uk">
        <span role="img" aria-label="UK flag emoji" />
      </li>
      <li className="subsec__selection places singapore">
        <span role="img" aria-label="Singapore flag emoji" />
      </li>
      <li className="subsec__selection places ireland">
        <span role="img" aria-label="Ireland flag emoji" />
      </li>
      <li className="subsec__selection places france">
        <span role="img" aria-label="France flag emoji" />
      </li>
    </ul>
  </div>
);

const Main = () => (
  <div className="main">
    <div className="main__intro">
      <h1>Hey! I'm Yuka<span className="waiving-hand" role="img" aria-label="waiving hand">👋🏼</span></h1>
      <p>I am a Front-end developer, who is passionate about technology and design <span className="tech-woman" role="img" aria-label="tech woman emoji">👩🏻‍💻 </span>
      Currenlty looking for a company where I can contribute to change the future <span className="rainbow" role="img" aria-label="rainbow emoji">🌈</span>
      </p>
    </div>
    <div className="main__subsection">
      <Skills />
      <Places />
    </div>
    <div className="main__read-on"><span role="img" aria-label="hands down emoji">👇🏼</span></div>
  </div>
);

export default Main;
