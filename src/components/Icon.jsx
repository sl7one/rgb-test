import icons from '../assets/sprite.svg';

export const Icon = ({ name }) => {
  return (
    <svg width={15} height={15}>
      <use href={icons + '#' + name}></use>
    </svg>
  );
};
