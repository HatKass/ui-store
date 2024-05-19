import Hero from "../layouts/Hero";
import Navbar from "../layouts/Navbar";
import Services from "../layouts/Services";
import MobileProducts from "../layouts/MobileProducts";
import SmartWatches from "../layouts/SmartWatches";
import Sale from "../layouts/Sale";
import LastPosts from "../layouts/LastPosts";
import Testimonials from "../layouts/Testimonials";
import SubscribeUs from "../layouts/SubscribeUs";
import Insta from "../layouts/Insta";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" ">
        <div>
          <Hero />
        </div>
        <div className="lg:px-24 px-6 space-y-[120px] py-[120px]">
          <Services />
          <MobileProducts />
          <SmartWatches />
        </div>
        <Sale />
        <div className="lg:px-24 px-6 space-y-[120px] py-[120px]">
          <LastPosts />
          <Testimonials />
          <SubscribeUs />
          <Insta />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
