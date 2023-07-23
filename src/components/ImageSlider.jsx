import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// eslint-disable-next-line react/prop-types
const ImageSlider = ({ images }) => {
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <div>
      <Swiper {...swiperParams}>
        {/* eslint-disable-next-line react/prop-types */}
        {images?.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default ImageSlider;
