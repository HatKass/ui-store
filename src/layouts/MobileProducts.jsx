import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HomeProducts } from "@/constants";

const MobileProducts = () => {
  return (
    <section className="space-y-[30px]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg lg:text-3xl">MOBILE PRODUCTS</h3>
        <a className=" " href="#">
          <span className=" relative after:absolute after:content-[''] after:-bottom-2 after:h-[1.5px] after:rounded-md after:bg-slate-800/10 after:w-full after:left-0 ">
            GO TO SHOP
          </span>
        </a>
      </div>
      <div className="">
        <Carousel className="relative">
          <CarouselContent className="">
            {HomeProducts.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-auto sm:basis-1/3 md:basis-1/3 lg:basis-1/5"
              >
                <Card className="border-0">
                  <CardContent className="flex flex-col justify-between p-0 gap-y-3 ">
                    <img
                      className="rounded-sm"
                      src={product.img}
                      alt={product.name}
                    />
                    <div className="flex justify-between text-lg">
                      <span className="">{product.name}</span>
                      <span className="text-[#72AEC8]">$ {product.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="lg:static absolute top-1/2  left-16">
            <CarouselPrevious />
          </div>
          <div className="lg:static absolute top-1/2 right-16">
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MobileProducts;
