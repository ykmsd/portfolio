import React from 'react';
import Main from './Main';
import Work from './Work';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

const Portfolio = () => (
  <div>
    <div className="container">
      <Main />
      <Work />
      <SocialMedia />
    </div>
    <Footer />
  </div>
);


export default Portfolio;
