import React from "react";
import UserReviews from "@/components/details/UserReviews";
import ProductOverview from "@/components/details/ProductOverview";
import Header from "@/components/common/Header";

const page = () => {
  return (
    <div>
      <Header />
      <ProductOverview />
      <UserReviews />
    </div>
  );
};

export default page;
