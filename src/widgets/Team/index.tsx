import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { Carousel, TeamCard, Decorator2, Decorator3 } from '../../components';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';

const Team = () => {
  const { title, subtitle } = useContext(LangContext).team;
  const width = useResaize();

  const dataMock = [
    {
      name: 'Sam Goff',
      position: 'General Partner',
      photo:
        'https://s3-alpha-sig.figma.com/img/0744/963f/e0f58a4e3028b72bc5ba1ce8f65821cf?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QLzFBxVFYRc6MV3Jzd~ieenHTmmSviBi~9RkGpuZozJPHXuxtAwPSN4rARwfe~aB5H36haGTwMX6L9aemTUK7mhfGPTTX-Sj8X71F~mcLQ1OrLIaz3mdNp9uggol01-qSN4U4KFCqMof9~2-XQVPxg46KdPodK6nP9PF1DnnigAg8JulsPApU2nbrAA3eyqxPPBbRDkRtGHvzFlEC27l2jp-WthdWEqNOg91SqNW33NFKbPNE0mcl5RawVkd5VPapkNEXSjPgvG2hJuoLbXermLC9vXvy8SVaRiz9EEPRJfC2~DZF93SqOVSIn4M0ewMeH3Q6MTawbfSu071Y~OPoQ__',
    },
    {
      name: 'Ross Riabchikov',
      position: 'General Partner',
      photo:
        'https://s3-alpha-sig.figma.com/img/1489/bf49/27d284d3362d178569911c0be29aafd1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7b-l0Qopu96yLKg~uMeZAcj2IPIUCK75lA6WnpIP~30Djs9Yy--QxCtzdtGRD3gRUSUNF9BOcOKsF1XJw8OoAYuzwBpd4FJTVn5o0t3bZRu3-VBFS-wXFOtnq5~54XrM8x4iiFzzoBcwYvBWpNuHjHdjARQGQWbBU9FtVxEO5rJNo1w9prU3Fz9nYlm0Gem1iTW8Qh-iACr3oXaoTJqlLZZWN4k4tIaY2-cevFb2nNXxyhS~LNOC4qSicIuWzsVZQfF8x4Cf4qo3L~E9jQU7DMC~ru99vu-kfiEJZ3MyKiB8D0EQbgXrgQFV5kMJpCz~rVLNPWCn7ktmohwiraOMg__',
    },
  ];

  const cards: JSX.Element[] = dataMock.map(item => (
    <TeamCard key={item.name} cardData={item} />
  ));

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        <em>{title.slice(0, 1)}</em>
        {title.slice(1)}
      </h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <Carousel data={cards} style={{ padding: '6rem 0 11.6rem' }} />
      {width > SCREEN_WIDTH.M && <div className={styles.decorator1} />}
      {width > SCREEN_WIDTH.M && <Decorator2 nameClass={styles.decorator2} />}
      {width > SCREEN_WIDTH.M && <Decorator3 nameClass={styles.decorator3} />}
    </section>
  );
};

export default Team;
