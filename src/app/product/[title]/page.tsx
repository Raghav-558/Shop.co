import React from "react";
import UserReviews from "@/components/details/UserReviews";
import Header from "@/components/common/Header";
import AlsoLike from "@/components/details/AlsoLike";
import ProductOverview from "@/components/details/ProductOverview";

const page = () => {
  return (
    <div>
      <Header />
      <ProductOverview/>
      <UserReviews />
      <AlsoLike/>
    </div>
  );
};

export default page;
