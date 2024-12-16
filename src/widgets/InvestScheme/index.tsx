import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';

const InvestScheme = () => {
  const { title, scheme } = useContext(LangContext).investScheme;

  return (
    <section>
      <h1 className={styles.title}>
        {title.slice(0, 9)}
        <em>{title.slice(9)}</em>
      </h1>
      <ul className={styles.scheme}>
        {scheme.map((item, index) => (
          <li key={index}>
            <p>{item.title}</p>
            <span>{item.subtitle}</span>
          </li>
        ))}
        <div className={styles.y}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </ul>
    </section>
  );
};

export default InvestScheme;
