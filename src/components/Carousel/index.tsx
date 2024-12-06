import styles from './index.module.scss';
import { Arrow } from '../';
import { useState, useRef } from 'react';

interface CarouselProps {
  data: JSX.Element[];
  style?: React.CSSProperties;
  arrow?: boolean;
}

const Carousel = ({ data, style, arrow = false }: CarouselProps) => {
  const [rotate, setRotate] = useState(false);

  const firstRef = useRef<HTMLLIElement>(null);
  const lastRef = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    setRotate(!rotate);

    if (rotate) {
      return firstRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    } else {
      return lastRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <>
      {data.length > 0 && (
        <section aria-label="Gallery" style={style}>
          {arrow && (
            <a className={styles.link} onClick={handleClick}>
              <Arrow nameClass={rotate ? styles.rotate : ''} />
            </a>
          )}
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
