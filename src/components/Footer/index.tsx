import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';
import Line from '../../assets/images/dashedLine.svg';

const Footer = () => {
  const width = useResaize();
  const { header } = useContext(LangContext);
  const { connect, privacy, address } = useContext(LangContext).footer;
  const currentYear = new Date().getFullYear();

  const navLinks = header.map(item => ({
    name: item.label,
    link: `#${item.value}`,
  }));

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        {width <= SCREEN_WIDTH.M && <img src={Line} alt="" />}
        <div className={styles.connect}>
          <span>{connect}</span>
          <ul>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>E-mail</a>
            </li>
            <li>
              <a>Telegram</a>
            </li>
          </ul>
        </div>
        {width <= SCREEN_WIDTH.M && <img src={Line} alt="" />}
      </div>
      {width > SCREEN_WIDTH.M && (
        <div className={styles.privacy}>
          <p>{privacy}</p>
          <span>{currentYear} © Arize Capital</span>
        </div>
      )}
      <div className={styles.address}>
        {width > SCREEN_WIDTH.M && <span>{address}</span>}
        <ul>
          <li>USA, San Francisco District, San Francisco, 24th Avenue</li>
          <li>
            United Kingdom, London, Flagstaff House, 12, 9 St. George's Wharf,
            SW8 2LE
          </li>
          <li>USA, NY, New York, 66 West 38 Streett</li>
        </ul>
      </div>
      {width <= SCREEN_WIDTH.M && (
        <>
          <img src={Line} alt="" />
          <div className={styles.privacy}>
            <span>{currentYear} © Arize Capital</span>
            <p>{privacy}</p>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
