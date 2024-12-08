import styles from './index.module.scss';

interface ButtonProps {
  title: string;
  type?: 'primary' | 'secondary' | 'accentBlack' | 'accentViolet';
  smallSize?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({
  title,
  type = 'primary',
  smallSize,
  style,
  onClick,
}: ButtonProps) => {
  const buttonSize = smallSize ? styles.button__small : styles.button__large;
  const buttonStyle = `${styles.button} ${buttonSize} ${
    styles[`button__${type}`]
  }`;

  return (
    <button className={buttonStyle} style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
