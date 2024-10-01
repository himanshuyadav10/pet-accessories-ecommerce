import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

const Carousel = () => {
  return (
    <div>
      <div className="h-[600px] bg-white">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          className="h-[50%]"
        >
          <SwiperSlide>
            <img src={"../images/carousel_1.jpg"} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../images/carousel_2.jpg"} alt="slide2" />
          </SwiperSlide>
          <SwiperSlide className="bg-black">
            <video controls muted="muted">
              <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../images/carousel_4.jpg"} alt="slide4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../images/carousel_5.jpg"} alt="slide5" />
          </SwiperSlide>
        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-stone-900" />
       </div>
    </div>
  );
};

export default Carousel;
