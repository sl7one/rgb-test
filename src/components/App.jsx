import 'react-phone-number-input/style.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppBox, Container, HeroBox } from 'styles/styled';
import { useMedia } from 'use-media';

import frontEnd from '../assets/front-end developer.png';
import { Benefits } from './Benefits';
import { Header } from './Header';
import { HeroForm } from './HeroForm';
import { LeftHeroPart } from './LeftHeroPart';

export const App = () => {
  const isDesktop = useMedia({ minWidth: 1082 });

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
    </AppBox>
  );
};
