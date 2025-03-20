import React from "react";
import CustomSwiper from "../common/CustomSwiper";
import { ALSO_LIKE_LIST } from "@/utils/helper";
import CustomHeading from "../common/CustomHeading";
import CustomButton from "../common/CustomButton";

const AlsoLike = () => {
  return (
    <div className="pt-16 pb-[78px] max-lg:py-[50px]">
      <div className="max-w-[1272px] px-4 mx-auto">
        <CustomHeading
          myClass="text-center pb-[55px] max-md:pb-8 max-sm:max-w-[284px] mx-auto"
          text="You might also like"
        />
        <CustomSwiper myMap={ALSO_LIKE_LIST} />
      </div>
    </div>
  );
};

export default AlsoLike;
