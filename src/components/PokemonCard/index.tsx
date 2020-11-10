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
  const typeStyleResolver = (type: string) => ({
    [s.fire]: type === 'fire',
    [s.fighting]: type === 'fighting',
    [s.dragon]: type === 'dragon',
    [s.ice]: type === 'ice',
    [s.water]: type === 'water',
    [s.grass]: type === 'grass',
    [s.bug]: type === 'bug',
    [s.stile]: type === 'stile',
    [s.dark]: type === 'dark',
    [s.rock]: type === 'rock',
    [s.normal]: type === 'normal',
    [s.gosth]: type === 'gosth',
    [s.poison]: type === 'poison',
    [s.psychic]: type === 'psychic',
    [s.fairy]: type === 'fairy',
    [s.ghost]: type === 'ghost',
    [s.ground]: type === 'ground',
    [s.electric]: type === 'electric',
  });
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
            <span className={cn(s.label, typeStyleResolver(type))}>{type}</span>
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
