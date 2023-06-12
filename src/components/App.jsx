import 'react-phone-number-input/style.css';
import { useMediaQuery } from 'react-responsive';
import 'react-toastify/dist/ReactToastify.css';

import { AppBox, Container, HeroBox } from 'styles/styled';

import frontEnd from '../assets/front-end developer.png';
import { Benefits } from './Benefits';
import { Header } from './Header';
import { HeroForm } from './HeroForm';
import { LeftHeroPart } from './LeftHeroPart';
import { AnimatedPics } from './AnimatedPics';

export const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1082 });

  return (
    <AppBox>
      <Container>
        <Header />
        <main>
          <HeroBox>
            <LeftHeroPart />
            <HeroForm />
            {!isDesktop && <Benefits />}
          </HeroBox>
        </main>
      </Container>
      {isDesktop && <img src={frontEnd} alt="front end developer" />}
      {isDesktop && <AnimatedPics />}
    </AppBox>
  );
};
