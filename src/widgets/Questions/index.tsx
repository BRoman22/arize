import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';
import { Select } from '../../components';

const Questions = () => {
  const width = useResaize();
  const { title, altTitle } = useContext(LangContext).questions;

  return (
    <section>
      <h1 className={styles.title}>
        <em>{(width > SCREEN_WIDTH.M ? title : altTitle).slice(0, 1)}</em>
        {(width > SCREEN_WIDTH.M ? title : altTitle).slice(1)}
      </h1>
      <Select />
    </section>
  );
};

export default Questions;
