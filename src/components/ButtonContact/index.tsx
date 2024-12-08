import styles from './index.module.scss';

interface ButtonProps {
  title: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ButtonContact = ({ title, style, onClick }: ButtonProps) => {
  return (
    <div className={styles.wrapper} style={style} onClick={onClick}>
      <button className={styles.button}>{title}</button>
      <svg
        width="68"
        height="44"
        viewBox="0 0 68 44"
        stroke="#020504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.layout}
      >
        <rect
          x="0.25"
          y="0.25"
          width="67.5"
          height="43.5"
          rx="21.75"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};

export default ButtonContact;
