import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ReactNode } from "react";

const Slider = (prop: { slides: { id: number; component: ReactNode }[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        300: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      navigation
     
    >
      {prop.slides.map((slide) => (
        <SwiperSlide key={slide.id}>{slide.component}</SwiperSlide>
      ))}
      <span slot="container-start">
        <div className="w-full h-6"></div>
      </span>
      <span slot="container-end">
        <div className="w-full h-12"></div>
      </span>
      <span slot="wrapper-start">
        <div className="w-6 sm:w-12 h-full"></div>
      </span>
      {/* <span slot="wrapper-end">Wrapper End</span> */}
    </Swiper>
  );
};

export default Slider;
