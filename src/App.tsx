import React from 'react';
// import cn from 'classnames';

// import s from '~/App.module.scss';
// import image from '~/assets/images/pokemon.png';

import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';

const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Index />
      </div>
      <Footer />
    </>
  );
};

export default App;
