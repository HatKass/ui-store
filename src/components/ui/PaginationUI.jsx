import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToBasket, updateTotal } from "@/features/basketSlice";

const Pagination = ({ items, itemsPerPage }) => {
  const dispatch = useDispatch();

  const addItemToBasket = (product) => {
    dispatch(addToBasket(product));
    dispatch(updateTotal());
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {currentItems.map((product, index) => (
          <div key={index} className="flex flex-col justify-between gap-y-3 ">
            <div className="group relative">
              <button
                onClick={() => addItemToBasket(product)}
                className="group-hover:bottom-4 group-hover:opacity-100 transition-all duration-700 opacity-0 absolute left-1/2 -translate-x-1/2 bottom-0 lowercase text-white bg-slate-800 px-3 py-2  text-xs"
              >
                add to cart
              </button>
              <img
                className="rounded-sm w-full"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="flex justify-between lg:text-xl md:text-lg text-sm">
              <span className="uppercase">{product.title}</span>
              <span className="text-[#72AEC8]">$ {product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <ul>
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              style={{
                backgroundColor:
                  pageNumber === currentPage ? "lightgray" : "white",
                cursor: "pointer",
                display: "inline-block",
                padding: "10px",
                margin: "5px",
              }}
            >
              {pageNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
