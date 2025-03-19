import React from "react";
interface CustomButtonProps {
  text: string;
  myClass?: string;
}

const CustomButton = ({ text, myClass }: CustomButtonProps) => {
  return (
    <button
      className={`font-medium leading-[100%] cursor-pointer rounded-[62px] transition-all duration-300 border ${myClass}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
