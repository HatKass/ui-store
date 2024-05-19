const SubscribeUs = () => {
  return (
    <section className="bg-[#272727] flex flex-wrap lg:justify-evenly justify-center gap-y-11 px-28 py-20">
      <div className="flex flex-col gap-y-[10px] lg:text-left  text-center">
        <span className="text-white lg:text-3xl uppercase text-2xl ">
          Subscribe Us now
        </span>
        <span className="text-white font-light lg:text-lg text-sm">
          Get latest news, updates and deals directly mailed to your inbox.
        </span>
      </div>
      <div className="self-center lg:grid md:grid  flex flex-wrap justify-center  lg:grid-cols-3 md:grid-cols-3 grid-cols-2  gap-y-7">
        <input
          className="pl-[30px]  col-span-2 outline-none lg:pr-16 md:pr-12 sm:pr-10 pr-2 py-[10px]"
          placeholder="Your email address here"
          type="text"
        />
        <button className="bg-[#72AEC8]  text-white uppercase lg:px-10 lg:py-4 px-8 py-2 ">
          subscribe
        </button>
      </div>
    </section>
  );
};

export default SubscribeUs;
