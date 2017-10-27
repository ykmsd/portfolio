import React from 'react';
import WeatherClock from '../img/weather-clock.png';
import WhatShouldIEat from '../img/what-should-i-eat.png';
import MultipleTimers from '../img/multiple-timers.png';
import AirbnbClone from '../img/airbnb-clone.png';

const WorkData = [
  {
    name: 'Weather Clock',
    img: WeatherClock,
    description: `As I'm from Tokyo, live in Paris, and have many friends in SF, I wanted to build something I can easily see the time and weather for these cities.
    For practice, I used async & await, flexbox, and CSS animation.`,
    demo_link: 'https://ykmsd.github.io/weather-clock/',
    code_link: 'https://github.com/ykmsd/weather-clock',
  },
  {
    name: 'Multiple Timers',
    img: MultipleTimers,
    description: 'I cook/bake a lot and sometimes need several timers. It was not absolutely necessary but I used Redux to understand it better.',
    demo_link: 'https://ykmsd.github.io/multiple-timers/',
    code_link: 'https://github.com/ykmsd/multiple-timers',
  },
  {
    name: 'What Should I Eat?',
    img: WhatShouldIEat,
    description: 'This app randomely suggests popular Asian restaurants in Paris. I love Asian food and it\'s good to get inspiration for lunch/dinner!',
    demo_link: 'https://ykmsd.github.io/what-should-i-eat/',
    code_link: 'https://github.com/ykmsd/what-should-i-eat',
  },
];

const Chingu = () => (
  <div className="work">
    <a className="work__links" href="https://github.com/chingu-coders/Voyage2-Bears-16" target="_blank" rel="noopener noreferrer">
      <img src={AirbnbClone} className="work__img" alt="Airbnb Clone" />
    </a>
    <div className="work__description">
      <h4>Airbnb Clone</h4>
      <p>I joined <a href="https://chingu-cohorts.github.io/chingu-directory/" target="_blank" rel="noopener noreferrer">Chingu</a>, a helpful community for developpers and work in a team to build something together. Our team decided to clone Airbnb website (still in progress). So far I have built carousels and filters.</p>
      <div className="work__code">
        <a className="work__links" href="https://github.com/chingu-coders/Voyage2-Bears-16" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
  </div>
);

const Work = () => (
  <div className="works">
    <h2 className="works__title">My Work <span className="works__emoji" role="img" aria-label="star emoji">✨</span></h2>
    <div className="work__wrapper">
      {
        WorkData.map(work => (
          <div className="work">
            <a className="work__links" href={work.demo_link} target="_blank" rel="noopener noreferrer">
              <img src={work.img} className="work__img" alt={work.name} />
            </a>
            <div className="work__description">
              <h4>{work.name}</h4>
              <p>{work.description}</p>
              <div className="work__code">
                <a className="work__links" href={work.demo_link} target="_blank" rel="noopener noreferrer">Demo</a>
                <a className="work__links" href={work.code_link} target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))
      }
      <Chingu />
    </div>
  </div>
);

export default Work;
