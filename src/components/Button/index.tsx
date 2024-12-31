import { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'accentBlack' | 'accentViolet';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({
  title,
  variant = 'primary',
  style,
  onClick,
}: ButtonProps) => {
  const buttonStyle = `${styles.button} ${styles[`button__${variant}`]}`;

  return (
    <button className={buttonStyle} style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
