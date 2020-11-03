import React from 'react';

import s from './index.module.scss';
import banner from '~/assets/images/Banner.png';

const Header = () => {
  return (
    <div className={s.index}>
      <div className={s.indexContent}>
        <img className={s.indexContentBanner} src={banner} alt="banner" />
        <h1 className={s.indexContentTitle}>
          <strong>Find</strong> all your <br /> favorite <strong>Pokemon</strong>
        </h1>
        <p className={s.indexContentSubtitle}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </p>
        <a href="http://pokemon.com" className={s.indexContentButton}>
          See pokemons
        </a>
      </div>
    </div>
  );
};

export default Header;
