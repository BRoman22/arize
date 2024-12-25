interface IconProps {
  nameClass?: string;
  onClick?: () => void;
}

const Decorator3 = ({ nameClass, onClick }: IconProps) => {
  return (
    <svg
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={nameClass}
      onClick={() => onClick?.()}
    >
      <path d="M0 80H80V0" stroke="#020504" />
    </svg>
  );
};

export default Decorator3;
