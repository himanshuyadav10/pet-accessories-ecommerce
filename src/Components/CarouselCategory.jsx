import { Swiper, SwiperSlide } from "swiper/react";
import {useNavigate, createSearchParams} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${
        createSearchParams({
          category: `${category}`,
          searchTerm: ``})
      }`
    })
  };
  


  return (
    <div className="bg-white m-3">
<div className="text-2xl font-semibold p-3">Category</div>
      <Swiper slidesPerView={5} spaceBetween={10} navigation={true}>
        <SwiperSlide onClick={() => searchCategory("Food")} className="cursor-pointer">
          <img src="../images/category_0.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Shampoo")} className="cursor-pointer">
          <img src="../images/category_1.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Toys")} className="cursor-pointer">
          <img className="h-[174px]" src="../images/category_2.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Grooming")} className="cursor-pointer">
          <img src="../images/category_3.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Food")} className="cursor-pointer">
          <img src="../images/category_4.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Cloth")} className="cursor-pointer">
          <img src="../images/category_5.jpg" />
        </SwiperSlide> 
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
