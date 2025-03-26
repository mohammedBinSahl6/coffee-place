'use client';

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  "“The coffee here is absolutely amazing! The latte was perfectly balanced, and the atmosphere is so cozy. Highly recommend!”",
  "“I love this place! The cold brew is smooth and refreshing, and the staff is always friendly. My go-to spot for coffee.”",
  "“Best cappuccino I've ever had! The foam was so velvety, and the espresso had a rich flavor. Will definitely come back!”",
  "“Such a charming cafe! The iced mocha was delicious, and the pastries are fresh and tasty. Perfect for a quick break.”",
  "“The vanilla latte here is my favorite! It's not too sweet, and the coffee flavor shines through. Great service too!”",
];

export default function ClientsReviewSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel className="w-full max-w-xl" plugins={[plugin.current]}>
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review}>
            <div className="p-1">
              <p className="text-xl text-gray-200 italic">{review}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
