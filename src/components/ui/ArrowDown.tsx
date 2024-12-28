interface IconProps {
  nameClass?: string;
  onClick?: () => void;
}

const ArrowDown = ({ nameClass, onClick }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={nameClass}
      onClick={() => onClick?.()}
    >
      <path d="M11.9 15.9L5 9H18.8L11.9 15.9Z" fill="#020504" />
    </svg>
  );
};

export default ArrowDown;
