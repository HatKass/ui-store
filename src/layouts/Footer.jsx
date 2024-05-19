import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import shippingBrand from "../assets/images/shippingBrand.png";
import shippingBrand2 from "../assets/images/shippingBrand2.png";
import payment from "../assets/images/payment.png";
import payment2 from "../assets/images/payment2.png";
import payment3 from "../assets/images/payment3.png";

const Footer = () => {
  return (
    <footer className="space-y-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[120px] lg:px-24 px-6 gap-y-8">
        <div className="space-y-[10px]">
          <h3 className="lg:text-3xl">UI Store.</h3>
          <div>
            <p className="font-light text-[#3A3A3A]">
              Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
              Gravida massa volutpat aenean odio erat nullam fringilla.
            </p>
            <div className="flex gap-x-[30px] pt-9">
              <FacebookIcon
                size={20}
                className="text-gray-500 hover:text-[#72AEC8] transition-colors duration-100 cursor-pointer"
              />
              <Instagram
                size={20}
                className="text-gray-500 hover:text-[#72AEC8] transition-colors duration-100 cursor-pointer"
              />
              <Twitter
                size={20}
                className="text-gray-500 hover:text-[#72AEC8] transition-colors duration-100 cursor-pointer"
              />
              <Linkedin
                size={20}
                className="text-gray-500 hover:text-[#72AEC8] transition-colors duration-100 cursor-pointer"
              />
              <Youtube
                size={20}
                className="text-gray-500 hover:text-[#72AEC8] transition-colors duration-100 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="space-y-[10px]">
          <h3 className="lg:text-2xl uppercase font-light">QUIK links</h3>
          <ul className="uppercase font-normal text-sm space-y-2 ">
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-[10px]">
          <h3 className="lg:text-2xl uppercase font-light">help & info</h3>
          <ul className="uppercase font-normal text-sm space-y-2 ">
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                Track Your Order
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                Returns policies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                Shipping + Delivery{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#72AEC8] duration-200 transition-colors"
              >
                Faqs
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-[10px]">
          <h3 className="lg:text-2xl uppercase font-light">Contact us</h3>
          <p className="font-light">Do you have any queries or suggestions?</p>
          <span>yourinfo@gmail.com</span>
          <p className="font-light">
            If you need support? Just give us a call.
          </p>
          <span>+55 111 222 333 44</span>
        </div>
      </div>
      <div className="border-t-2 py-5">
        <div className="lg:px-24 px-6 flex-wrap gap-y-4 flex justify-between items-center">
          <div className="flex  items-center gap-x-2 font-light">
            <span>We ship with:</span>
            <img src={shippingBrand} alt="shippingBrand" />
            <img src={shippingBrand2} alt="shippingBrand" />
          </div>
          <div className="flex items-center gap-x-2 font-light">
            <span>Payment options:</span>
            <img src={payment} alt="payment method img" />
            <img src={payment2} alt="payment method img" />
            <img src={payment3} alt="payment method img" />
          </div>
          <div className="font-light">© Copyright 2024 UI Store.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
