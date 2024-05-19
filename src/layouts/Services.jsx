import { Award, ShieldPlus, ShoppingCart, Tag } from "lucide-react";
import Group1 from "../assets/icons/Group.png";
import Group2 from "../assets/icons/Group2.png";
import Group3 from "../assets/icons/Group3.png";
import Group4 from "../assets/icons/Group4.png";

const Services = () => {
  return (
    <section className="flex flex-wrap  gap-y-16  justify-between   lg:space-y-0 ">
      <div className="flex gap-3">
        <img src={Group1} className="self-start" alt="shopping cart" />
        <div className="flex flex-col gap-px">
          <span>FREE DELIVERY</span>
          <p className="text-gray-400 lg:max-w-64">
            Consectetur adipi elit lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <img src={Group2} className="self-start" alt="shopping cart" />

        <div className="flex flex-col gap-px">
          <span>QUALITY GUARANTEE</span>
          <p className="text-gray-400 lg:max-w-64">
            Dolor sit amet orem ipsu mcons ectetur adipi elit.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <img src={Group3} className="self-start" alt="shopping cart" />
        {/* <Tag color="#34aeeb" /> */}
        <div className="flex flex-col gap-px ">
          <span>DAILY OFFERS</span>
          <p className="text-gray-400 lg:max-w-64">
            Amet consectetur adipi elit loreme ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <img src={Group4} className="self-start" alt="shopping cart" />
        {/* <ShieldPlus color="#34aeeb" /> */}
        <div className="flex flex-col gap-px">
          <span>100% SECURE PAYMENT</span>
          <p className="text-gray-400 lg:max-w-64">
            Rem Lopsum dolor sit amet, consectetur adipi elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
