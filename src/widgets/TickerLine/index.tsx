import styles from './index.module.scss';
import { TickerCard } from '../../components';
import {
  mock1,
  mock2,
  mock3,
  mock4,
  mock5,
  mock6,
  mock7,
} from '../../assets/images/tickerCardMock';

const mockData = [
  {
    id: 1,
    logo: mock1,
  },
  {
    id: 2,
    logo: mock2,
  },
  {
    id: 3,
    logo: mock3,
  },
  {
    id: 4,
    logo: mock4,
  },
  {
    id: 5,
    logo: mock5,
  },
  {
    id: 6,
    logo: mock6,
  },
  {
    id: 7,
    logo: mock7,
  },
];

const TickerLine = () => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {mockData.map(item => (
          <li key={item.id}>
            <TickerCard data={item} />
          </li>
        ))}
      </ul>
      <ul aria-hidden="true" className={styles.list}>
        {mockData.map(item => (
          <li key={item.id}>
            <TickerCard data={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TickerLine;
