import styles from './index.module.scss';

interface ButtonProps {
  title: string;
  type?: 'primary' | 'secondary' | 'accentBlack' | 'accentViolet';
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({ title, type = 'primary', style, onClick }: ButtonProps) => {
  const buttonStyle = `${styles.button} ${styles[`button__${type}`]}`;

  return (
    <button className={buttonStyle} style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
