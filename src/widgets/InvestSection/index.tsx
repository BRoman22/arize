import styles from './index.module.scss';
import { useState, useContext } from 'react';
import { LangContext } from '../../contexts';
import { InvestCard, Button, Carousel } from '../../components';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

import spaceXMock from '../../assets/images/spaceXMock.svg';
import investCardMock from '../../assets/images/investCardMock.png';

const InvestSection = () => {
  const width = useResaize();
  const { title, subtitle, statistic, title2, subtitle2, showButton } =
    useContext(LangContext).investSection;

  const dataMock = Array(5).fill({
    id: 1,
    name: 'SpaceX',
    titleImage: spaceXMock,
    rate: '5x',
    subtitle:
      'X, formerly Twitter, is a social media platform for real-time communication and user-generated content',
    backImage: investCardMock,
  });

  const [showMoreButton, setShowMoreButton] = useState(
    dataMock.length > 4 ? false : true,
  );

  const getCards = () => (showMoreButton ? dataMock : dataMock?.slice(0, 4));

  const carouselData: JSX.Element[] = dataMock.map(item => (
    <InvestCard key={item.id} cardData={item} />
  ));

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
        <Carousel data={carouselData} style={{ margin: '32px 0 24px' }} />
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
