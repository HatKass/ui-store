import Home_banner from "../assets/images/Home_banner.png";
import Rectangle from "../assets/images/Rectangle.png";

const Sale = () => {
  return (
    <section className="bg-[#EDF1F3] pt-2 lg:pt-0 lg:grid md:grid md:grid-cols-4 lg:grid-cols-4 place-items-center">
      <div className="flex flex-col gap-y-6 col-start-2 ">
        <div className="flex items-center lg:justify-normal md:justify-normal justify-center gap-x-3">
          <img src={Rectangle} alt="Rectangle" />
          <span className="font-thin text-3xl text-[#888A8B]">10 % OFF</span>
        </div>
        <span className=" lg:text-5xl text-3xl text-center lg:text-left">
          NEW YEAR SALE
        </span>
        <button className="bg-black text-white px-[32px] py-3 lg:px-[42px] lg:py-4 self-center lg:self-baseline">
          SHOP SALE
        </button>
      </div>
      <img className="col-span-2" src={Home_banner} alt="Home_banner" />
    </section>
  );
};

export default Sale;
