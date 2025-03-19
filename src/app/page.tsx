import Brands from "@/components/home/Brands";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import DressStyle from "@/components/home/DressStyle";
import NewArrivals from "@/components/home/NewArrivals";
import TopSelling from "@/components/home/TopSelling";
import Hero from "@/components/home/Hero";
import HappyCustomer from "@/components/home/HappyCustomers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomer/>
    </>
  );
}
