import { HeaderBox, InfoBox, InfoBoxText, Logo } from 'styles/styled';
import logo from '../assets/logo.png';
import { Icon } from './Icon';

export const Header = () => {
  return (
    <HeaderBox>
      <Logo src={logo} alt="logo" />
      <InfoBox>
        <InfoBoxText>
          <Icon name="calendar" />
          28 декабря
        </InfoBoxText>
        <InfoBoxText>
          <Icon name="time" />
          3,5 часа
        </InfoBoxText>
      </InfoBox>
    </HeaderBox>
  );
};
