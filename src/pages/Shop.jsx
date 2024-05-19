import Banner from "@/layouts/Banner";
import Footer from "@/layouts/Footer";
import Insta from "@/layouts/Insta";
import Navbar from "@/layouts/Navbar";
import ShopUI from "@/layouts/ShopUI";
import SubscribeUs from "@/layouts/SubscribeUs";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div>
        <Banner title="Shop" />
        <div className="lg:px-24 px-6 space-y-[120px] py-[120px]">
          <ShopUI />
          <SubscribeUs />
          <Insta />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
