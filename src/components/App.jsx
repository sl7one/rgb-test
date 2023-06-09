import { useState } from 'react';

import {
  AppBox,
  BenefitsList,
  Container,
  FormBox,
  FormFields,
  FormPrivacy,
  FormTitle,
  HeaderText,
  HeroBox,
  HeroText,
  LeftPart,
  PostTitleText,
  RightPart,
  WebinarText,
} from 'styles/styled';

import frontEnd from '../assets/front-end developer.png';
import gift from '../assets/gift.png';
import kiril from '../assets/kiril kasatkin.png';
import { Header } from './Header';
import { Icon } from './Icon';

export const App = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { name, phone, email } = formData;

  const onChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AppBox>
      <Container>
        <Header />
        <main>
          <HeroBox>
            <LeftPart>
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
                <span>
                  навыками должен обладать фронтенд разработчик в 2022 году
                </span>{' '}
                и как начать карьеру в востребованной профессии{' '}
                <span>
                  с зарплатой <span>от 1 000$</span>
                </span>
              </HeroText>
              <BenefitsList>
                <li>
                  <img
                    src={kiril}
                    alt="kiril kasatonov"
                    width={51}
                    height={49.3}
                  />
                  <div>
                    <h3>
                      Кирилл <span>КАСАТОНОВ</span>
                    </h3>
                    <p>
                      6 лет коммерческого опыта с такими компаниями как
                      Mercedes-Benz и другими крупными корпорациями
                    </p>
                  </div>
                </li>
                <li>
                  <img src={gift} alt="gift" width={37.8} height={37.8} />
                  <div>
                    <h3>Бонус за регистрацию</h3>
                    <p>
                      PDF-файл "5 преимуществ профессии фронтенд разработчика"
                    </p>
                  </div>
                </li>
              </BenefitsList>
            </LeftPart>
            <RightPart>
              <FormBox>
                <FormTitle>
                  Запишитесь <span>бесплатно</span> <br /> и получите подарок
                </FormTitle>
                <FormFields>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Ваше имя и фамилия"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    placeholder="Ваш номер телефона"
                  />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Ваш email"
                  />
                  <button type="submit">Записаться бесплатно</button>
                </FormFields>
                <FormPrivacy>
                  Нажимая на кнопку я согашаюсь{' '}
                  <span>с политикой конфидециальности</span>
                </FormPrivacy>
              </FormBox>
            </RightPart>
          </HeroBox>
        </main>
      </Container>
      <img src={frontEnd} alt="front end developer" />
    </AppBox>
  );
};
