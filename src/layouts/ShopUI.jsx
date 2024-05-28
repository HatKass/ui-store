import { Brands, Categories, Prices, Shop_Products, Colors } from "@/constants";
import { useEffect, useMemo, useState } from "react";
import SelectUI from "@/components/ui/SelectUI";
import Pagination from "@/components/ui/PaginationUI";

const ShopUI = () => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterCategorie, setFilterCategorie] = useState("All");
  const [filterColor, setFilterColor] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");

  const changeCategorie = (val) => {
    setFilterCategorie(val);
  };

  const changeColor = (val) => {
    setFilterColor(val);
  };

  const changeBrand = (val) => {
    setFilterBrand(val);
  };

  const changePrice = (val) => {
    setFilterPrice(val);
  };

  const filteredProducts = useMemo(() => {
    let filteredProducts = [...Shop_Products];

    if (filterTitle !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
    }
    if (filterCategorie !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.categorie.toLowerCase() === filterCategorie.toLowerCase()
      );
    }
    if (filterColor !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color.toLowerCase() === filterColor.toLowerCase()
      );
    }

    if (filterBrand !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand.toLowerCase() === filterBrand.toLowerCase()
      );
    }

    return filteredProducts;
  }, [
    Shop_Products,
    filterTitle,
    filterCategorie,
    filterColor,
    filterBrand,
    filterPrice,
  ]);

  return (
    <section>
      <div className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            onChange={(el) => setFilterTitle(el.target.value)}
            placeholder="Search"
            className="border w-[250px] px-3 py-2 outline-none"
          />
          <div className="w-full grid lg:grid-cols-4 gap-4 ">
            <SelectUI
              onValueChange={changeCategorie}
              title="Categories"
              items={Categories}
            />
            <SelectUI
              onValueChange={changeColor}
              title="Colors"
              items={Colors}
            />
            <SelectUI
              onValueChange={changeBrand}
              title="Brands"
              items={Brands}
            />
            <SelectUI
              onValueChange={changePrice}
              title="Prices"
              items={Prices}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          {filteredProducts.length === 0 && <h3 className="">No results</h3>}
          <Pagination items={filteredProducts} itemsPerPage={10} />
        </div>
      </div>
    </section>
  );
};

export default ShopUI;
