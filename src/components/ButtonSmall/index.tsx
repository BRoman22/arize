import styles from './index.module.scss';

interface ButtonProps {
  title: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ButtonSmall = ({ title, style, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonSmall;
