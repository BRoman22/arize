import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';

const StrategicFocus = () => {
  const { firstCard, secondCard, thirdCard } =
    useContext(LangContext).strategicFocus;

  return (
    <section id="strategy">
      <div className={styles.section__stacking}>
        <h1 className={styles.title}>
          {firstCard.title.slice(0, 11)}
          <em>{firstCard.title.slice(11, 12)}</em>
          {firstCard.title.slice(12)}
        </h1>
        <h2 className={styles.subtitle}>{firstCard.subtitle}</h2>
        <ul className={styles.list}>
          <li>
            {firstCard.list[0].slice(0, 9)}
            <em>{firstCard.list[0].slice(9)}</em>
          </li>
          <li>
            {firstCard.list[1].slice(0, 8)}
            <em>{firstCard.list[1].slice(8)}</em>
          </li>
          <li>
            {firstCard.list[2].slice(0, 22)}
            <em>{firstCard.list[2].slice(22)}</em>
          </li>
          <li>
            {firstCard.list[3].slice(0, 12)}
            <em>{firstCard.list[3].slice(12)}</em>
          </li>
        </ul>
      </div>
      <div className={styles.section__stacking}>
        <h1 className={styles.title}>
          <em>{secondCard.title.slice(0, 1)}</em>
          {secondCard.title.slice(1)}
        </h1>
        <h2 className={styles.subtitle}>{secondCard.subtitle}</h2>
        <ul className={styles.list}>
          <li>
            {secondCard.list[0].slice(0, 14)}
            <em>{secondCard.list[0].slice(14)}</em>
          </li>
          <li>
            {secondCard.list[1].slice(0, 25)}
            <em>{secondCard.list[1].slice(25)}</em>
          </li>
        </ul>
      </div>
      <div className={styles.section__stacking}>
        <h1 className={styles.title}>
          <em>{thirdCard.title.slice(0, 1)}</em>
          {thirdCard.title.slice(1)}
        </h1>
        <h2 className={styles.subtitle}>{thirdCard.subtitle}</h2>
        <ul className={styles.list}>
          <li>
            {thirdCard.list[0].slice(0, 10)}
            <em>{thirdCard.list[0].slice(10)}</em>
          </li>
        </ul>
      </div>
      {/* <div className={styles.rocket}></div> */}
    </section>
  );
};

export default StrategicFocus;
