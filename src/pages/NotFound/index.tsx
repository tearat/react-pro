import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Image404 from '../../assets/images/404_r.png';
import Button from '../../components/Button/index';
import { LinkEnum } from '../../router';

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
            <Button onClick={() => navigate(LinkEnum.HOME)} color="yellow">
              Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
