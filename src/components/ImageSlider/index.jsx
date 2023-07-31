import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import * as S from './styles';

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
        {images?.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            {/* 이미지를 S.ImageSlide 스타일드 컴포넌트로 감싸기 */}
            <S.ImageSlide onClick={handleImageClick} img={imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
