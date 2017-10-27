import React from 'react';

const SocialMedia = () => (
  <div className="social-media">
    <h3 className="social-media__title">Follow me <span role="img" aria-label="woman emoji">💁🏻</span></h3>
    <ul className="social-media__selections">
      <li className="social-media__icon">
        <a href="http://github.com/ykmsd" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true" title="github" />
        </a>
      </li>
      <li className="social-media__icon">
        <a href="http://twitter.com/ykmsd" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter" aria-hidden="true" title="twitter" />
        </a>
      </li>
      <li className="social-media__icon">
        <a href="http://www.linkedin.com/in/ykmsd" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin" aria-hidden="true" title="linkedin" />
        </a>
      </li>
      <li className="social-media__icon">
        <a href="http://www.instagram.com/yk.msd  " target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
      </li>
      <li className="social-media__icon">
        <a href="http://www.instagram.com/eatasiainparis" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-cutlery" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialMedia;
