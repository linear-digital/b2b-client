import Footer from "@/Components/Bars/Footer/Footer";
import Navbar from "@/Components/Bars/Navbar";
import FAQ from "@/Components/Pages/Home/FAQ";
import FeaturedBrands from "@/Components/Pages/Home/FeaturedBrands";
import HeroArea from "@/Components/Pages/Home/HeroArea";
import Newsletter from "@/Components/Pages/Home/Newsletter";
import ReviewSlider from "@/Components/Pages/Home/Reviews";
import ShopCategory from "@/Components/Pages/Home/ShopCategory";
import Trending from "@/Components/Pages/Home/Trending";
import Vouchers from "@/Components/Pages/Home/Voucher";
import Why from "@/Components/Pages/Home/Why";

export default function Home() {
  return (
    <main className="bg-[#F7F7F7]">
      <Navbar />
      {/* <HeroArea />
      <ShopCategory />
      <Vouchers />
      <Trending />
      <Why />
      <Newsletter />
      <FeaturedBrands />
      <FAQ />
      <ReviewSlider />
      <Footer /> */}
    </main>
  );
}
