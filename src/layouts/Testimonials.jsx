import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonials_Comments } from "@/constants";
import testimonial_vector from "../assets/images/testimonial_vector.png";

const Testimonials = () => {
  return (
    <section>
      <Carousel className="relative">
        <CarouselContent className="">
          {Testimonials_Comments.map((comment, index) => (
            <CarouselItem key={index} className="">
              <Card className="border-0">
                <CardContent className="space-y-[30px] flex flex-col">
                  <img
                    className="w-fit  self-center"
                    src={testimonial_vector}
                    alt="vector"
                  />
                  <p className="px-10 font-thin lg:text-4xl text-sm text-center">
                    {comment.comment}
                  </p>
                  <img
                    className="w-fit self-center"
                    src={comment.rating}
                    alt="review and author"
                  />
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
    </section>
  );
};

export default Testimonials;
