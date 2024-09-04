import Footer from "@/Components/Bars/Footer/Footer";
import Navbar from "@/Components/Bars/Navbar";
import HeroArea from "@/Components/Pages/Home/HeroArea";
import ShopCategory from "@/Components/Pages/Home/ShopCategory";
import Trending from "@/Components/Pages/Home/Trending";
import Vouchers from "@/Components/Pages/Home/Voucher";

export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroArea />
      <ShopCategory />
      <Vouchers />
      <Trending />
      <Footer />
    </main>
  );
}
