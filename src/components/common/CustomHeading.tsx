import React from "react";

interface CustomHeadingProps {
  text: string;
  myClass?: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ text, myClass }) => {
  return (
    <h2
      className={`font-bold font-intergal text-5xl max-lg:text-4xl max-md:text-[32px] leading-[100%] uppercase ${myClass}`}
    >
      {text}
    </h2>
  );
};

export default CustomHeading;
