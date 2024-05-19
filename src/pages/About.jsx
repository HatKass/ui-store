import AboutUs from "@/layouts/AboutUs";
import Footer from "@/layouts/Footer";
import Insta from "@/layouts/Insta";
import Navbar from "@/layouts/Navbar";
import Services from "@/layouts/Services";
import SubscribeUs from "@/layouts/SubscribeUs";
import Testimonials from "@/layouts/Testimonials";
import Banner from "@/layouts/Banner";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <Banner title="about us" />
        <div className="lg:px-24 px-6 space-y-[120px] py-[120px]">
          <Services />
          <AboutUs />
          <Testimonials />
          <SubscribeUs />
          <Insta />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
