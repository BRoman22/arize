import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { Button } from '../../components';
import ReactPlayer from 'react-player';
import play from '../../assets/images/play.png';
import thumbnailMock from '../../assets/images/thumbnailMock.png';

const AboutUs = () => {
  // c бэка будет приходить картинка и видео
  const { title, button } = useContext(LangContext).aboutUs;
  const urlVideo =
    'https://cdn.prod.website-files.com/65de26c3b97c2ffff662b7e4/660d6258d5eee27ecff2495b_How we work with founders [preview]-transcode.mp4';

  return (
    <section id="about">
      <h1 className={styles.title}>
        {title.slice(0, 6)}
        <em>{title.slice(6)}</em>
      </h1>
      <ReactPlayer
        className={styles.video}
        url={urlVideo}
        width={'100%'}
        height={'100%'}
        controls
        playing
        playIcon={<img src={play} alt="play" />}
        light={<img src={thumbnailMock} alt="thumbnail" />}
      />
      <Button title={button} type="accentBlack" />
    </section>
  );
};

export default AboutUs;
