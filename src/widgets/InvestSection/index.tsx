import styles from './index.module.scss';
import { useState, useContext } from 'react';
import { LangContext } from '../../contexts';
import { InvestCard, Button, Carousel } from '../../components';
import { TInvestCard } from '../../constants';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

import spaceXMock from '../../assets/images/spaceXMock.svg';
import investCardMock from '../../assets/images/investCardMock.png';

const InvestSection = () => {
  const width = useResaize();
  const { title, subtitle, statistic, title2, subtitle2, showButton } =
    useContext(LangContext).investSection;

  const cardMock: TInvestCard = {
    id: 1,
    name: 'SpaceX',
    titleImage: spaceXMock,
    rate: '5x',
    subtitle:
      'X, formerly Twitter, is a social media platform for real-time communication and user-generated content',
    backImage: investCardMock,
  };

  const yy = Array(5).fill(cardMock);

  const getCards = () => (showMoreButton ? yy : yy?.slice(0, 4));

  const [showMoreButton, setShowMoreButton] = useState(
    yy.length > 4 ? false : true,
  );

  const ee: JSX.Element[] = Array(4).fill(
    <>
      <InvestCard cardData={cardMock} />
    </>,
  );

  const handleShowMoreButton = () => setShowMoreButton(!showMoreButton);

  return (
    <section id="invest">
      <h1 className={styles.title}>
        <span>{title.charAt(0)}</span>
        {title.slice(1, title.length)}
      </h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <ul className={styles.statistic}>
        {statistic.map((item, index) => (
          <li className={styles.statistic__item} key={index}>
            <span className={styles.item__value}>{item.value}</span>
            <span className={styles.item__caption}>{item.caption}</span>
          </li>
        ))}
      </ul>
      <h3 className={styles.title2}>{title2}</h3>
      <p className={styles.subtitle2}>{subtitle2}</p>
      {width > SCREEN_WIDTH.M ? (
        <ul className={styles.cardlist}>
          {getCards()?.map((item, index) => (
            <li key={item.id + index}>
              <InvestCard cardData={item} />
            </li>
          ))}
        </ul>
      ) : (
        <Carousel data={ee} style={{ margin: '32px 0 24px' }} />
      )}
      {width > SCREEN_WIDTH.M &&
        (showMoreButton ? null : (
          <Button
            title={showButton}
            type={'accentBlack'}
            onClick={handleShowMoreButton}
          />
        ))}
    </section>
  );
};

export default InvestSection;
