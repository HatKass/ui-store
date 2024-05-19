import Video from "../assets/images/Video.png";

const AboutUs = () => {
  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 place-items-center gap-x-16 gap-y-12">
      <img className="w-full" src={Video} alt="video" />
      <div className="lg:space-y-[40px] space-y-3">
        <h3 className="md:text-[24px] lg:text-[30px] text-xl uppercase">
          How was UI Store Found?
        </h3>
        <p className="font-light lg:text-base text-sm">
          Risus augue curabitur diam senectus congue velit et. Sed vitae metus
          nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio
          eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed
          vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque
          maecenas odio eros at. Quam libero etiam et in ac at quis. Sed vitae
          metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas
          odio eros at. Et libero vulputate amet duis erat volutpat vitae eget.
          Quam libero etiam et in ac at quis. Risus augue curabitur diam
          senectus congue velit et.{" "}
        </p>
        <div className="lg:block md:block flex justify-center">
          <button className="uppercase  bg-black px-8 py-3 rounded-sm text-[10px] lg:text-base self-baseline  text-white  hover:bg-neutral-700 transition-colors duration-300">
            SHOP our store
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
