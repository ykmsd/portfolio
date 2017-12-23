import React from 'react';

const SocialMediaData = [
  {
    link: 'http://github.com/ykmsd',
    name: 'github',
  },
  {
    link: 'http://twitter.com/ykmsd',
    name: 'twitter',
  },
  {
    link: 'http://www.linkedin.com/in/ykmsd',
    name: 'linkedin',
  },
  {
    link: 'http://www.instagram.com/yk.msd',
    name: 'instagram',
  },
  {
    link: 'http://www.instagram.com/eatasiainparis',
    name: 'cutlery',
  },
];

const SocialMedia = () => (
  <div className="social-media">
    <h3 className="social-media__title">Follow me <span role="img" aria-label="woman emoji" className="social-media__emoji">💁🏻</span></h3>
    <ul className="social-media__selections">
      {
        SocialMediaData.map(media => (
          <li className="social-media__icon">
            <a href={media.link} target="_blank" rel="noopener noreferrer">
              <i className={`fa fa-${media.name}`} aria-hidden="true" />
            </a>
          </li>
        ))
      }

    </ul>
  </div>
);

export default SocialMedia;
