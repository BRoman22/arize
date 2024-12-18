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
        width="16"
        height="44"
        viewBox="0 0 16 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.layout}
      >
        <path
          d="M15.6116 0.941406C14.2202 1.36295 12.8872 1.91861 11.6274 2.59334L11.8635 3.0341C13.0945 2.37474 14.3971 1.8318 15.7566 1.41993L15.6116 0.941406Z"
          fill="#020504"
        />
        <path
          d="M8.04313 4.99263C6.92979 5.90738 5.90786 6.9293 4.99312 8.04264L5.37945 8.36006C6.27352 7.27188 7.27237 6.27303 8.36055 5.37896L8.04313 4.99263Z"
          fill="#020504"
        />
        <path
          d="M2.59382 11.6269C1.91909 12.8867 1.36343 14.2197 0.941892 15.6111L1.42041 15.7561C1.83229 14.3966 2.37523 13.094 3.03458 11.863L2.59382 11.6269Z"
          fill="#020504"
        />
        <path
          d="M0 21.9995C0 21.2716 0.0353474 20.552 0.104419 19.8423L0.602068 19.8907C0.53456 20.5844 0.5 21.2878 0.5 21.9995C0.5 22.7112 0.53456 23.4146 0.602068 24.1083L0.104419 24.1567C0.0353473 23.447 0 22.7274 0 21.9995Z"
          fill="#020504"
        />
        <path
          d="M0.941891 28.3879C1.36343 29.7793 1.91909 31.1124 2.59382 32.3721L3.03458 32.136C2.37523 30.905 1.83229 29.6024 1.42041 28.243L0.941891 28.3879Z"
          fill="#020504"
        />
        <path
          d="M4.99312 35.9564C5.90786 37.0697 6.92979 38.0917 8.04313 39.0064L8.36054 38.6201C7.27236 37.726 6.27352 36.7271 5.37945 35.639L4.99312 35.9564Z"
          fill="#020504"
        />
        <path
          d="M11.6274 41.4057C12.8872 42.0804 14.2202 42.6361 15.6116 43.0576L15.7565 42.5791C14.3971 42.1672 13.0945 41.6243 11.8635 40.9649L11.6274 41.4057Z"
          fill="#020504"
        />
      </svg>
    </div>
  );
};

export default ButtonContact;
