const Banner = ({ title }) => {
  return (
    <section className="relative w-full flex justify-center items-center h-[calc(100vh-300px)]">
      <div className=" absolute w-full h-full bg-slate-300 bg-opacity-20 z-10"></div>
      <p className="uppercase md:text-7xl text-4xl  lg:text-8xl bg-gradient-to-t  from-neutral-600 lg:to-neutral-200  bg-clip-text text-transparent font-thin  ">
        {title}
      </p>
    </section>
  );
};

export default Banner;
