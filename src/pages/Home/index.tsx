import React from 'react';

import About from '../../components/About';
import Banner from '../../components/Banner';
import Clients from '../../components/Clients';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Clients />
    </>
  );
};

export default Home;
