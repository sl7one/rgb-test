import { styled } from 'styled-components';
import bg from '../assets/bg.png';

export const AppBox = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1082px) {
    height: 100vh;
    padding-bottom: unset;
  }
`;

export const Container = styled.div`
  max-width: 360px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;

  @media screen and (min-width: 1082px) {
    max-width: 1083px;
    padding: unset;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

export const Logo = styled.img`
  width: 101px;

  @media screen and (min-width: 1082px) {
    width: 182px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 18px;
`;

export const InfoBoxText = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 0.72;

  color: ${({ theme }) => theme.colors.mainWhite};
  background-color: ${({ theme }) => theme.colors.headerInfo};
  /* padding: 13px 23px; */
  width: 88px;
  height: 24px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:nth-child(2) {
    width: 84px;
  }

  @media screen and (min-width: 1082px) {
    width: 141px;
    height: 40px;

    &:nth-child(2) {
      width: 141px;
      height: 40px;
    }

    font-size: 14px;
    line-height: 1;
  }
`;

export const HeroBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1082px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 135px;
    margin-top: 116px;
  }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;

  @media screen and (min-width: 1082px) {
    display: block;
    width: 474px;
  }
`;

export const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 52.7273px;
  line-height: 1.23;

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainAccent};

  @media screen and (min-width: 1082px) {
    font-size: 77px;
    line-height: 1.22;
  }
`;

export const WebinarText = styled.p`
  display: inline-block;
  font-weight: 600;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.mainWhite};
  padding: 4px 13px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  @media screen and (min-width: 1082px) {
    font-size: 16px;
    line-height: 2;
  }
`;

export const PostTitleText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.mainWhite};

  display: flex;
  align-items: center;

  @media screen and (min-width: 1082px) {
    font-size: 21.9494px;
    line-height: 1.18;
  }

  span {
    font-weight: 800;

    font-size: 16px;
    line-height: 20px;

    margin-right: 20px;
    text-transform: uppercase;
    position: relative;
    top: 2px;
    z-index: 1;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1082px) {
      font-size: 23.6391px;
      line-height: 1.23;
      padding: 8px 14px;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;

      width: 77.81px;
      height: 32.12px;

      @media screen and (min-width: 1082px) {
        width: 106.72px;
        height: 38.69px;
      }

      background-color: ${({ theme }) => theme.colors.mainAccent};
      border-radius: 5px;
      transform: rotate(-3.51deg);
      z-index: -1;
    }
  }
`;

export const HeroText = styled.p`
  margin-top: 20.46px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;

  @media screen and (min-width: 1082px) {
    font-size: 18px;
    text-align: left;
  }

  font-size: 14px;
  line-height: 148%;

  span {
    display: inline;
    font-weight: 600;

    &:nth-of-type(2) {
      display: inline-block;
      color: ${({ theme }) => theme.colors.secondaryAccent};

      @media screen and (min-width: 1082px) {
        display: inline;
        color: inherit;
      }
    }

    span {
      @media screen and (min-width: 1082px) {
        font-weight: 700;
        font-size: 17.332px;
        line-height: 1.5;
        padding: 1px 6px;

        background: #4252d1;
        border-radius: 3px;
        background-color: ${({ theme }) => theme.colors.secondaryAccent};
      }
    }
  }
`;

export const BenefitsList = styled.ul`
  margin-top: 36px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.mainWhite};

  @media screen and (min-width: 1082px) {
    margin-top: 54.6px;
    flex-direction: column;
    font-size: 12px;
    line-height: 1.5;
  }

  li:first-of-type() {
    text-transform: uppercase;
  }

  li {
    display: grid;
    grid-template-columns: 56px 161px;
    gap: 16px;

    @media screen and (min-width: 1082px) {
      grid-template-columns: 56px 1fr;
    }

    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 1.5;

      @media screen and (min-width: 1082px) {
        font-size: 13px;
        line-height: 1.23;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.secondaryAccent};
    }
  }
`;

export const FormBox = styled.form`
  margin-top: 20px;
  width: 328px;
  padding: 40px 21px;
  background-color: ${({ theme }) => theme.colors.formColor};
  border-radius: 10px;
  opacity: 0;

  @media screen and (min-width: 1082px) {
    margin-top: unset;
    width: 366px;
    padding: 50px 60px;
    position: relative;
    z-index: 1;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  text-align: center;

  @media screen and (min-width: 1082px) {
    font-size: 22px;
    line-height: 1.18;
  }

  color: ${({ theme }) => theme.colors.mainWhite};
  span {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;

export const FormFields = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;

  @media screen and (min-width: 1082px) {
    margin-top: 20px;
  }

  input {
    width: 100%;
    padding: 12px 26.3px;
    font-size: 12px;
    line-height: 1.83;

    background-color: #272d3d;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.mainWhite};

    @media screen and (min-width: 1082px) {
      padding: 14px 22px;
      font-size: 13px;
      line-height: 1.95;
    }

    font-size: 12px;
    line-height: 22px;

    &::placeholder {
      color: #d7d7d7;
    }
  }

  button {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.57;
    color: ${({ theme }) => theme.colors.mainWhite};
    padding: 13px;

    background-color: ${({ theme }) => theme.colors.secondaryAccent};
    border-radius: 5px;

    width: 222.25px;
    margin: 0 auto;

    @media screen and (min-width: 1082px) {
      font-size: 15px;
      line-height: 1.6;
      background-color: ${({ theme }) => theme.colors.mainAccent};
      width: 100%;
    }
  }
`;

export const FormPrivacy = styled.p`
  margin-top: 20px;
  font-size: 11px;
  line-height: 1.5;

  color: rgba(255, 255, 255, 0.5);
  display: inline-block;

  @media screen and (min-width: 1082px) {
    font-size: 12px;
    line-height: 1.5;
  }

  span {
    display: block;
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const ErrorMessageText = styled.p`
  font-weight: 300;
  color: red;
`;

export const AnimatedPicsBox = styled.div`
  position: absolute;
  right: 9%;
  top: 0;
  transform: translateY(50%);
  z-index: 0;

  #html {
    transform: translate(60%, 40%);
  }
  #css {
    transform: translate(-60%, 25%);
  }
  #js {
    transform: translate(70%, 25%);
  }
  #pic {
    transform: translate(-60%, 15%);
  }
  #vs {
    transform: translate(30%, 25%);
  }
`;
