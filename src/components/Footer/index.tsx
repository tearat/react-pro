import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerContent}>
        <div>
          Make with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
        <div>Ours Team</div>
      </div>
    </div>
  );
};

export default Footer;
