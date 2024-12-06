import styles from './index.module.scss';
import { LangContext } from '../../contexts';
import { useContext } from 'react';
import { Logo } from '../../components';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

const Header = () => {
  const t = useContext(LangContext);

  const width = useResaize();

  const navLinks = t.header.nav.map(item => ({
    name: item.toUpperCase(),
    link: `#${item}`,
  }));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="#">
              <Logo />
            </a>
          </li>
          {width > SCREEN_WIDTH.M &&
            navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
