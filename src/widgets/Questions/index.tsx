import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';

const Questions = () => {
  const { title } = useContext(LangContext).questions;

  return (
    <section>
      <h1 className={styles.title}>
        <em>{title.slice(0, 1)}</em>
        {title.slice(1)}
      </h1>
    </section>
  );
};

export default Questions;
