import React from "react";
interface CommonDescriptionProps {
  text: string;
  myClass?: string;
}

const Description = ({ text, myClass }: CommonDescriptionProps) => {
  return (
    <p
      className={`leading-[22px] font-normal max-sm:text-sm ${myClass}`}
    >
      {text}
    </p>
  );
};

export default Description;
