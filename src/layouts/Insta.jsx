import { InstaImages } from "@/constants";
import hover from "../assets/images/hover.png";

const Insta = () => {
  return (
    <section className="space-y-[30px]">
      <h3 className="uppercase text-lg lg:text-3xl text-center">
        shop our insta
      </h3>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1  gap-x-[10px] gap-y-[10px]">
        {InstaImages.map((image, index) => (
          <div key={index} className="relative group ">
            <div className="group-hover: group-hover:opacity-100 transition-all duration-500  bg-black bg-opacity-40 opacity-0 w-full h-full absolute flex justify-center items-center">
              <img src={hover} alt="insta logo" />
            </div>
            <img className="w-full" src={image} alt="insta image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insta;
