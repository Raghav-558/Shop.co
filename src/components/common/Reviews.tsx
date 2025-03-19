import React, { useState } from "react";
import { DotsIcon, GreenCheckedIcon } from "@/utils/icons";
import CustomButton from "./CustomButton";
import { USER_REVIEWS_LIST } from "@/utils/helper";
import Description from "./Description";

const ReviewsData = () => {
  const [sortOption, setSortOption] = useState("Oldest");
  const [sortedReviews, setSortedReviews] = useState([...USER_REVIEWS_LIST]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const option: string = e.target.value;
    setSortOption(option);

    const sortedList = [...USER_REVIEWS_LIST].sort((a, b) => {
      const dateA: Date = new Date(a.uploadDate.split("Posted on ")[1]);
      const dateB: Date = new Date(b.uploadDate.split("Posted on ")[1]);
      return option === "Latest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });
    setSortedReviews(sortedList);
  };

  return (
    <div className="pt-8 pb-16 max-md:pb-[50px] max-md:pt-6">
      <div className="max-w-[1272px] px-4 mx-auto">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <p className="font-bold text-2xl max-md:text-xl leading-[100%]">
              All Reviews
            </p>
            <p className="leading-[100%] text-black/60 text-base">
              ({USER_REVIEWS_LIST.length})
            </p>
          </div>
          <select
            onChange={handleSortChange}
            value={sortOption}
            className="cursor-pointer text-medium text-base max-md:text-sm leading-[100%] outline-none bg-custom-gray rounded-[62px] font-medium py-[13px] px-5"
          >
            <option className="text-medium text-base leading-[100%] max-md:text-sm">
              Oldest
            </option>
            <option className="text-medium text-base leading-[100%] max-md:text-sm">
              Latest
            </option>
          </select>
        </div>
        <div className="flex flex-wrap max-w-[1240px] w-full pt-7 lg:gap-x-[1.62%] max-lg:gap-5 gap-y-5">
          {sortedReviews.map((item, index) => (
            <div
              key={index}
              className="w-[49.19%] max-lg:w-full border border-black/10 rounded-[20px] py-7 px-8 max-sm:p-6 max-lg:px-7"
            >
              <div className="flex w-full justify-between items-center">
                <span>{}</span>
                <span className="cursor-pointer flex">
                  <DotsIcon />
                </span>
              </div>
              <div className="flex gap-1 items-center pt-[15px] max-md:pt-3">
                <p className="font-bold text-xl max-md:text-base leading-[22%]">
                  {item.userName}
                </p>
                <GreenCheckedIcon />
              </div>
              <Description
                myClass="pt-3 pb-6 max-md:pb-4 max-md:pt-2 text-black/60"
                text={`"${item.description}"`}
              />
              <Description
                myClass="font-medium text-black/60"
                text={item.uploadDate}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-[36.42px] max-md:pt-5">
          <CustomButton
            myClass="w-[230px] h-[52px] max-md:w-[195px] max-md:h-[47px] text-base max-md:text-sm border-black/10 hover:bg-black hover:text-white"
            text="Load More Reviews"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsData;
