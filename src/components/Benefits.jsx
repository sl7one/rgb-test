import { BenefitsList } from 'styles/styled';
import gift from '../assets/gift.png';
import kiril from '../assets/kiril kasatkin.png';

export const Benefits = () => {
  return (
    <BenefitsList>
      <li>
        <img src={kiril} alt="kiril kasatonov" width={51} height={49.3} />
        <div>
          <h3>
            Кирилл <span>КАСАТОНОВ</span>
          </h3>
          <p>
            6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
            другими крупными корпорациями
          </p>
        </div>
      </li>
      <li>
        <img src={gift} alt="gift" width={37.8} height={37.8} />
        <div>
          <h3>Бонус за регистрацию</h3>
          <p>PDF-файл "5 преимуществ профессии фронтенд разработчика"</p>
        </div>
      </li>
    </BenefitsList>
  );
};
