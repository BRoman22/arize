interface ArrowProps {
  nameClass?: string;
  onClick?: () => void;
}

const Arrow = ({ nameClass, onClick }: ArrowProps) => {
  return (
    <svg
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="#020504"
      xmlns="http://www.w3.org/2000/svg"
      className={nameClass}
      onClick={() => onClick?.()}
    >
      <path d="M0 32H32V16H0V32Z" />
      <path d="M32 0L64 32H32V16V0Z" />
    </svg>
  );
};

export default Arrow;
