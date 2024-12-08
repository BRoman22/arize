interface IconProps {
  nameClass?: string;
  onClick?: () => void;
}

const BurgerIcon = ({ nameClass, onClick }: IconProps) => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={nameClass}
      onClick={() => onClick?.()}
    >
      <path
        d="M0 16V13.3333H24V16H0ZM0 9.33333V6.66667H24V9.33333H0ZM0 2.66667V0H24V2.66667H0Z"
        fill="#141316"
      />
    </svg>
  );
};

export default BurgerIcon;
