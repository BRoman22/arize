import styles from './index.module.scss';
import { TTickerCard } from '../../constants';

interface ITickerCard {
  data: TTickerCard;
}

const TickerCard = ({ data }: ITickerCard) => {
  return (
    <div className={styles.tickerCard}>
      <img src={data.logo} alt="logo" />
    </div>
  );
};

export default TickerCard;
