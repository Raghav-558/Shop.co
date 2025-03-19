import Brands from "@/components/Home/Brands";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import DressStyle from "@/components/Home/DressStyle";
import NewArrivals from "@/components/Home/NewArrivals";
import TopSelling from "@/components/Home/TopSelling";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Footer />
    </>
  );
}
