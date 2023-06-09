import { styled } from 'styled-components';
import bg from '../assets/bg.png';

export const AppBox = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  max-width: 1083px;
  margin: 0 auto;
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

export const Logo = styled.img`
  width: 182px;
  height: 56px;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 18px;
`;

export const InfoBoxText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.mainWhite};
  background-color: ${({ theme }) => theme.colors.headerInfo};
  padding: 13px 23px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const HeroBox = styled.section`
  display: flex;
  gap: 135px;
  margin-top: 116px;
`;

export const LeftPart = styled.div`
  width: 474px;
`;

export const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 77px;
  line-height: 1.22;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainAccent};
`;

export const WebinarText = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.mainWhite};
  padding: 4px 13px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const PostTitleText = styled.p`
  font-weight: 600;
  font-size: 21.9494px;
  line-height: 1.18;
  color: ${({ theme }) => theme.colors.mainWhite};

  display: flex;
  align-items: center;

  span {
    font-weight: 800;
    font-size: 23.6391px;
    line-height: 1.23;
    padding: 8px 14px;
    text-transform: uppercase;
    position: relative;
    top: 2px;
    z-index: 1;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      display: block;
      position: absolute;

      width: 106.72px;
      height: 38.69px;

      background-color: ${({ theme }) => theme.colors.mainAccent};
      border-radius: 5px;
      transform: rotate(-3.51deg);
      z-index: -1;
    }
  }
`;

export const HeroText = styled.p`
  margin-top: 20.46px;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mainWhite};
  span {
    display: inline;
    font-weight: 500;

    span {
      font-weight: 700;
      font-size: 17.332px;
      line-height: 1.5;
      padding: 1px 6px;

      background: #4252d1;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.colors.secondaryAccent};
    }
  }
`;

export const BenefitsList = styled.ul`
  margin-top: 54.6px;
  display: grid;
  flex-direction: column;
  gap: 16px;

  font-size: 13px;
  line-height: 1.23;

  color: ${({ theme }) => theme.colors.mainWhite};

  li:first-of-type() {
    text-transform: uppercase;
  }

  li {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 16px;

    h3 {
      font-weight: 700;
    }

    span {
      color: ${({ theme }) => theme.colors.secondaryAccent};
    }
  }
`;

export const RightPart = styled.div``;

export const FormBox = styled.form`
  width: 474px;
  padding: 50px 60px;
  background-color: ${({ theme }) => theme.colors.formColor};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.18;
  text-align: center;

  color: ${({ theme }) => theme.colors.mainWhite};
  span {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;

export const FormFields = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  input {
    width: 248px;
    padding: 14px 22px;
    background-color: #272d3d;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.mainWhite};

    &::placeholder {
      color: #d7d7d7;
    }
  }

  button {
    font-weight: 700;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.mainWhite};
    padding: 13px;

    background-color: ${({ theme }) => theme.colors.mainAccent};
    border-radius: 5px;
  }
`;

export const FormPrivacy = styled.p`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.5);
  display: inline-block;
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
