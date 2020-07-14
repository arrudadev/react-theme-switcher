import React from 'react';

import About from '../../components/About';
import Banner from '../../components/Banner';
import Clients from '../../components/Clients';
import Features from '../../components/Features';
import Header from '../../components/Header';
import Services from '../../components/Services';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Clients />
      <Services />
      <Features />
    </>
  );
};

export default Home;
