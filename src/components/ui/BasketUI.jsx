import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import shopping_cart_50px from "@/assets/icons/shopping_cart_50px.png";
import { useDispatch, useSelector } from "react-redux";
import cancel_50px from "@/assets/icons/cancel_50px.png";
import plus_50px from "@/assets/icons/plus_50px.png";
import minus_50px from "@/assets/icons/minus_50px.png";
import {
  decreaseAmount,
  increaseAmount,
  removeItem,
  updateTotal,
} from "@/features/basketSlice";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const BasketUI = () => {
  const dispatch = useDispatch();
  const { products, total } = useSelector((store) => store.basket);

  const removeProduct = (product) => {
    dispatch(removeItem(product));
    dispatch(updateTotal());
  };

  const increaseProductAmount = (product) => {
    dispatch(increaseAmount(product));
    dispatch(updateTotal());
  };

  const decreaseProductAmount = (product) => {
    dispatch(decreaseAmount(product));
    dispatch(updateTotal());
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <img className="h-5" src={shopping_cart_50px} alt="" />
      </SheetTrigger>
      <SheetContent className="lg:w-[500px] w-full">
        <div className="overflow-y-auto h-full px-3 ">
          <SheetHeader>
            <SheetTitle>Your Shopping Cart</SheetTitle>
            <SheetDescription>
              <span className="font-bold mr-2 ">total:</span>
              <span className="text-slate-500">{total} $</span>
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-3">
            {products.map((product, index) => (
              <div className="grid grid-cols-3 gap-x-3 border p-2" key={index}>
                <img className="" src={product.img} alt="product image" />
                <div className="flex flex-col justify-between items-center">
                  <span className="font-semibold">{product.title}</span>
                  <div className="flex items-center justify-center space-x-2">
                    <button onClick={() => increaseProductAmount(product)}>
                      <img
                        className="lg:size-7 size-6"
                        src={plus_50px}
                        alt="plus"
                      />
                    </button>
                    <span className="text-slate-500">{product.amount}</span>
                    <button onClick={() => decreaseProductAmount(product)}>
                      <img
                        className="lg:size-7 size-6"
                        src={minus_50px}
                        alt="minus"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <span className="text-slate-500">{product.price} $</span>
                  <button onClick={() => removeProduct(product)}>
                    <img
                      className="lg:size-7 size-6"
                      src={cancel_50px}
                      alt="cancel"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BasketUI;
