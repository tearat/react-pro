import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Image404 from '../../assets/images/404_r.png';
import Button from '../../components/Button/index';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div>
          <div>
            <img className={s.contentImage} src={Image404} alt="" />
          </div>
          <div className={s.contentText}>
            <strong>The rocket team</strong>
            has won this time.
          </div>
          <div className={s.contentButtonBox}>
            <Button onClick={() => navigate('/')} color="yellow">
              Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
