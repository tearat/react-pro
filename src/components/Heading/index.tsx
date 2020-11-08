import React from 'react';
import s from './Heading.module.scss';

interface HeadingProps {
  type: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type }) => {
  return <div className={s.root}>{React.createElement(type, {}, children)}</div>;
};

export default Heading;
