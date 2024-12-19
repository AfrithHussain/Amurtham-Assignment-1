import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

 let Slider = function CarouselSize() {
  const dates = [
    { day: "Mon", date: "10 Oct", slots: "10 slots", highlight: "lime" },
    { day: "Tue", date: "11 Oct", slots: "02 slots", highlight: "red" },
    { day: "Wed", date: "12 Oct", slots: "05 slots", highlight: "yellow" },
    { day: "Thu", date: "13 Oct", slots: "03 slots", highlight: "yellow" },
    { day: "Fri", date: "14 Oct", slots: "01 slots", highlight: "red" },

    // Add more dates as needed
  ];

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {dates.map((item, index) => (
          <CarouselItem key={index} className="text-xs  basis-[130px] cursor-pointer ">
            <div className={`p-1 ${index === 0 ? "" : ""}`}>
              <Card className={`border ${index === 0 ? "" : "border-gray-300"} active:bg-neutral-100 active:transition-all active:duration-75`}>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className={` font-semibold ${index === 0 ? "text-lime-900" : "text-black"}`}>
                    {item.day}, {item.date}
                  </span>
                  <span className={`mt-1 text-sm ${item.highlight === "lime" ? "text-gray-600 c" : item.highlight === "red" ? "text-red-500" : "text-yellow-500"}`}>
                    {item.slots}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Slider;