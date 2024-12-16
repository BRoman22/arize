import styles from './index.module.scss';
import { Button } from '../../components';
import { TInvestCard } from '../../constants';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

interface InvestCardProps {
  cardData: TInvestCard;
}

const InvestCard = ({ cardData }: InvestCardProps) => {
  const { name, titleImage, rate, subtitle, backImage } = cardData;
  const { investCard } = useContext(LangContext);
  const width = useResaize();

  return (
    <>
      <div
        className={styles.investCard}
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className={styles.investCard__content}>
          <div className={styles.wrapper}>
            <img src={titleImage} alt={name} />
            <span className={styles.rate}>{rate}</span>
          </div>
          <span className={styles.subtitle}>{subtitle}</span>
          {width > SCREEN_WIDTH.M && (
            <div className={styles.buttons}>
              <Button title={investCard[0]} type="primary" />
              <Button title={investCard[1]} type="secondary" />
            </div>
          )}
        </div>
      </div>
      {width <= SCREEN_WIDTH.M && (
        <Button title={investCard[0]} type="accentBlack" />
      )}
    </>
  );
};

export default InvestCard;
