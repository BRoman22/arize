import styles from './index.module.scss';
import { LangContext } from '../../contexts';
import { useState, useContext } from 'react';
import { Logo, BurgerIcon, CloseCross } from '../../components';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

const Header = () => {
  const { header } = useContext(LangContext);
  const width = useResaize();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const navLinks = header.map(item => ({
    name: item.label,
    link: `#${item.value}`,
  }));

  const mobileMenu = (
    <nav className={styles.mobile__menu}>
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="/">
              <Logo />
            </a>
          </li>
          {width > SCREEN_WIDTH.M ? (
            navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))
          ) : (
            <li>
              {isOpen ? (
                <CloseCross onClick={handleClick} nameClass={styles.cross} />
              ) : (
                <BurgerIcon onClick={handleClick} />
              )}
            </li>
          )}
        </ul>
      </nav>
      {isOpen && width <= SCREEN_WIDTH.M ? mobileMenu : null}
    </header>
  );
};

export default Header;
