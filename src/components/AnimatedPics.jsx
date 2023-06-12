import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import pic from '../assets/pic.png';
import vs from '../assets/vs.png';
import { AnimatedPicsBox } from 'styles/styled';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const array = [
  {
    id: 'html',
    style: {
      backgroundImage: `url(${html})`,
      width: '111px',
      height: '105px',
    },
  },
  {
    id: 'css',
    style: {
      backgroundImage: `url(${css})`,
      width: '87px',
      height: '105px',
    },
  },
  {
    id: 'js',
    style: {
      backgroundImage: `url(${js})`,
      width: '93px',
      height: '87px',
    },
  },
  {
    id: 'pic',
    style: {
      backgroundImage: `url(${pic})`,
      width: '66px',
      height: '79px',
    },
  },
  {
    id: 'vs',
    style: {
      backgroundImage: `url(${vs})`,
      width: '88px',
      height: '78px',
    },
  },
];

export const AnimatedPics = () => {
  const ref = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0 },
      {
        scale: 1,
        stagger: 0.2,
        delay: 1.5,
        ease: 'elastic.out(1, 0.3)',
        duration: 1.5,
      }
    );
  }, []);

  return (
    <AnimatedPicsBox>
      {array.map(({ id, style }) => (
        <div
          key={id}
          id={id}
          style={{ ...style }}
          ref={el => ref.current.push(el)}
        ></div>
      ))}
    </AnimatedPicsBox>
  );
};
