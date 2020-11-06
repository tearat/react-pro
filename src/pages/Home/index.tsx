import React from 'react';
import s from './Home.module.scss';
import Header from '../../components/Header';
import Index from '../../components/Index';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Index />
      <Footer />
    </div>
  );
};

export default HomePage;
