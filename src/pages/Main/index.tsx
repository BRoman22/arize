import styles from './index.module.scss';
import { Logo, ButtonContact, Button } from '../../components';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

const Main = () => {
  const width = useResaize();
  const { capitalSection, buttonContact } = useContext(LangContext);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <Logo nameClass={styles.logo} />
          <span className={styles.title}>rize Capital</span>
          <span className={styles.subtitle__header}>
            {capitalSection.subtitleHeader}
          </span>
          <span className={styles.subtitle__footer}>
            {capitalSection.subtitleFooter}
          </span>
        </div>
        {width > SCREEN_WIDTH.M ? (
          <ButtonContact
            title={buttonContact}
            style={{ margin: '60px 0 0 60px' }}
          />
        ) : (
          <Button
            title={buttonContact}
            type="accentBlack"
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          />
        )}
      </section>
    </>
  );
};

export default Main;
