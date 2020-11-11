import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  title: string;
  attack: number;
  defense: number;
  img: string;
  types: Array<string>;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ title, attack, defense, img, types }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h3">{title}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type: string) => (
            <span className={cn(s.label, s[type as keyof typeof s])}>{type}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt="Charmander" />
      </div>
    </div>
  );
};

export default PokemonCard;
