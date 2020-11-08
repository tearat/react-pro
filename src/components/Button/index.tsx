import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  wide?: boolean;
  small?: boolean;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, small, wide, color }) => {
  const styleResolver = () => ({
    [s.small]: small,
    [s.wide]: wide,
    [s.yellow]: color === 'yellow',
    [s.blue]: color === 'blue',
    [s.black]: color === 'black',
  });

  return (
    <button type="button" className={cn(s.root, styleResolver())} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
