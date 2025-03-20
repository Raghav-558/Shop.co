import React from "react";
interface CustomButtonProps {
  text: string;
  myClass?: string;
  arrow?: any;
  customOnClick?: () => void;
}

const CustomButton = ({ text, myClass,arrow ,customOnClick }: CustomButtonProps) => {
  return (
    <button
      onClick={customOnClick}
      className={`font-medium leading-[100%] cursor-pointer rounded-[62px] transition-all duration-300 border ${myClass}`}
    >
      {text}
      {arrow && <span>{arrow}</span>}
    </button>
  );
};

export default CustomButton;
