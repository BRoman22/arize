import styles from './index.module.scss';
import { Arrow, SuccesCard } from '../../components';
import { useState, useRef, useContext } from 'react';
import { LangContext } from '../../contexts';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';
import GitLabMock from '../../assets/images/GitLabMock.svg';

const Carousel = () => {
  const { title } = useContext(LangContext).succesStories;
  const width = useResaize();
  const [rotate, setRotate] = useState(false);

  const firstRef = useRef<HTMLLIElement>(null);
  const lastRef = useRef<HTMLLIElement>(null);

  const data: JSX.Element[] = Array(10).fill(
    <SuccesCard
      cardData={{
        id: 1,
        name: 'Gitlab',
        titleImage: GitLabMock,
        rate: '5x',
        subtitle: 'After 30 months',
      }}
    />,
  );

  const handleClick = () => {
    const refOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    };

    setRotate(!rotate);

    return rotate
      ? firstRef.current?.scrollIntoView(refOptions)
      : lastRef.current?.scrollIntoView(refOptions);
  };

  return (
    <>
      {data.length > 0 && (
        <section aria-label="Gallery">
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              <em>{title.slice(0, 1)}</em>
              {title.slice(1)}
            </h1>
            {width > SCREEN_WIDTH.M && (
              <a className={styles.link} onClick={handleClick}>
                <Arrow nameClass={rotate ? styles.rotate : ''} />
              </a>
            )}
          </div>
          <ul className={styles.carousel__list}>
            {data.map((item, index) => (
              <li
                key={index}
                ref={
                  index === 0
                    ? firstRef
                    : index === data.length - 1
                    ? lastRef
                    : null
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Carousel;
