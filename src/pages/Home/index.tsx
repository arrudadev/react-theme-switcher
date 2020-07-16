import React from 'react';

import About from '../../components/About';
import Banner from '../../components/Banner';
import Clients from '../../components/Clients';
import Features from '../../components/Features';
import Header from '../../components/Header';
import Services from '../../components/Services';
import Technologies from '../../components/Technologies';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Clients />
      <Services />
      <Features />
      <Technologies />
      <Testimonials />
    </>
  );
};

export default Home;
