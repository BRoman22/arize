interface IconProps {
  nameClass?: string;
  onClick?: () => void;
}

const Decorator2 = ({ nameClass, onClick }: IconProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={nameClass}
      onClick={() => onClick?.()}
    >
      <path d="M7 33V0H0V40H40V33H7Z" fill="#141316" />
    </svg>
  );
};

export default Decorator2;
