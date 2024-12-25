import styles from './index.module.scss';
import { TSuccesCard } from '../../constants';
import { ButtonSmall } from '../../components';
import { useContext } from 'react';
import { LangContext } from '../../contexts';

interface SuccesCardProps {
  cardData: TSuccesCard;
}

const SuccesCard = ({ cardData }: SuccesCardProps) => {
  const { buttonSucces } = useContext(LangContext);

  return (
    <div className={styles.succesCard}>
      <img src={cardData.titleImage} alt={cardData.name} />
      <span>{cardData.rate}</span>
      <p>{cardData.subtitle}</p>
      <ButtonSmall
        title={buttonSucces}
        style={{ marginBottom: 'max(3.2rem, 32px)' }}
      />
    </div>
  );
};

export default SuccesCard;
