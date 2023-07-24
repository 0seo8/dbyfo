import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ images }) => {
  const swiperRef = useRef(null);

  const handleImageClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // 다음 슬라이드로 이동
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
          type: 'fraction',
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
        slidesPerView={1}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {images?.map((imageUrl, index) => (
          <SwiperSlide key={index} onClick={handleImageClick}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
