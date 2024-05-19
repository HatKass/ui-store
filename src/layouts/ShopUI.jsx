import { Shop_Products } from "@/constants";
import search from "../assets/images/search.png";
import { useState } from "react";

const ShopUI = () => {
  const [products, setProducts] = useState(Shop_Products);

  const handleSearch = (elem) => {
    elem.target.value === ""
      ? setProducts(Shop_Products)
      : setProducts(
          Shop_Products.filter((products) =>
            products.title
              .toUpperCase()
              .includes(elem.target.value.toUpperCase())
          )
        );
  };

  return (
    <section>
      <div className="grid lg:grid-cols-5 gap-x-7">
        <div className="col-span-1 space-y-8">
          <div className="w-full border">
            <input
              type="text"
              onChange={(target) => handleSearch(target)}
              placeholder="Search"
              className=" px-3 py-2 outline-none"
            />
          </div>
          <div className="space-y-4">
            <h3 className="uppercase underline text-xl">Categories</h3>
            <ul className="space-y-3">
              <li>
                <button className="hover:text-[#72AEC8] text-xl">All</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">Phones</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  Accessories
                </button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  Tablets
                </button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  Watches
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase underline text-xl">Tags</h3>
            <ul className="space-y-3">
              <li>
                <button className="hover:text-[#72AEC8] text-xl">White</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">Cheap</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">Mobile</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">Modern</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  Watches
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase underline text-xl">Brands</h3>
            <ul className="space-y-3">
              <li>
                <button className="hover:text-[#72AEC8] text-xl">Apple</button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  Samsung
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase underline text-xl">Filter by price</h3>
            <ul className="space-y-3">
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  Less than $100
                </button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  $100 - $400
                </button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  $400 - $700
                </button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  $700 - $1000
                </button>
              </li>
              <li>
                <button className="hover:text-[#72AEC8] text-xl">
                  $1000 - $1500
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 grid lg:grid-cols-3 items-start md:grid-cols-2 gap-8">
          {products.length === 0 && <h3 className="">No results</h3>}
          {products.map((product, index) => (
            <div key={index} className="flex flex-col justify-between gap-y-3 ">
              <div className="group relative">
                <button className="group-hover:bottom-4 group-hover:opacity-100 transition-all duration-700 opacity-0 absolute left-1/2 -translate-x-1/2 bottom-0 uppercase text-white bg-black px-6 py-2">
                  add to cart
                </button>
                <img
                  className="rounded-sm w-full"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <div className="flex justify-between lg:text-2xl md:text-xl text-lg">
                <span className="uppercase">{product.title}</span>
                <span className="text-[#72AEC8]">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopUI;
