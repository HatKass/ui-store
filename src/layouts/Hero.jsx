import banner1 from "@/assets/images/banner1.jpg";

const Hero = () => {
  return (
    <section className="flex justify-center lg:px-32 ">
      <div className=" absolute w-full h-full bg-slate-300 bg-opacity-20 z-10"></div>
      <div className="">
        <div className="grid lg:grid-cols-2  grid-cols-1 place-items-center h-screen">
          <div className="space-y-10 z-20 m-auto w-[80%] ">
            <p className="text-7xl  lg:text-8xl bg-gradient-to-t  lg:from-neutral-600 lg:to-neutral-200 from-black to-neutral-600 bg-clip-text lg:text-transparent lg:font-light font-medium ">
              Our Products are great
            </p>
            <button className="uppercase bg-black px-8 py-3 rounded-sm text-[10px] lg:text-base self-baseline  text-white  hover:bg-neutral-700 transition-colors duration-300">
              SHOP PRODUCT
            </button>
          </div>
          <img
            className="object-cover  h-screen absolute lg:static "
            src={banner1}
            alt="product"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
