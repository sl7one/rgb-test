import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { gsap } from 'gsap';
import {
  HeaderText,
  HeroText,
  LeftPart,
  PostTitleText,
  WebinarText,
} from 'styles/styled';

import { Benefits } from './Benefits';
import { Icon } from './Icon';

export const LeftHeroPart = () => {
  const ref = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 1082 });

  useEffect(() => {
    gsap.fromTo(ref.current, { x: 400 }, { x: 0, opacity: 1, duration: 1.5 });
  }, []);

  return (
    <LeftPart ref={ref}>
      <WebinarText>
        <Icon name="globe" />
        Вебинар
      </WebinarText>
      <HeaderText>front-end</HeaderText>
      <PostTitleText>
        <span>с нуля</span> легкий старт в IT профессии
      </PostTitleText>
      <HeroText>
        Узнайте какими{' '}
        <span>навыками должен обладать фронтенд разработчик в 2022 году</span> и
        как начать карьеру в востребованной профессии{' '}
        <span>
          с зарплатой <span>от 1 000$</span>
        </span>
      </HeroText>
      {isDesktop && <Benefits />}
    </LeftPart>
  );
};
