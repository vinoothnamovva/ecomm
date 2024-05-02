import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useNavigate } from 'react-router-dom';

import SwiperCore from 'swiper/core';
SwiperCore.use([Navigation]);

const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: 'search',
      search: `?${new URLSearchParams({
        category: `${category}`,
        searchTerm: '',
      })}`,
    });
  };

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
      >
        <SwiperSlide
          onClick={() => searchCategory('Deals')}
          className="cursor-pointer"
        >
          <img src={"/images/category_0.jpg"} alt="Deal category" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory('Amazon')}
          className="cursor-pointer"
        >
          <img src={"/images/category_1.jpg"} alt="Amazon category" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory('Fashion')}
          className="cursor-pointer"
        >
          <img src={"/images/category_2.jpg"} alt="Fashion category" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory('Computers')}
          className="cursor-pointer"
        >
          <img src={"/images/category_3.jpg"} alt="Computers category" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory('Home')}
          className="cursor-pointer"
        >
          <img src={"/images/category_4.jpg"} alt="Home category" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory('Mobiles')}
          className="cursor-pointer"
        >
          <img src={"/images/category_5.jpg"} alt="Mobiles category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
