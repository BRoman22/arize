import styles from './index.module.scss';

interface CarouselProps {
  data: JSX.Element[];
  style?: React.CSSProperties;
}

const Carousel = ({ data, style }: CarouselProps) => {
  return (
    <>
      {data.length > 0 && (
        <ul
          aria-label="Gallery"
          style={style}
          className={styles.carousel__list}
        >
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Carousel;
