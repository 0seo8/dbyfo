import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const ImageSlide = styled(SwiperSlide)`
  // width: 100%; /* 이미지의 너비를 100%로 설정 */
  // height: 0;
  // aspect-ratio: 16 / 9; /* 이미지의 가로 세로 비율을 16:9로 유지 */
  // background-image: url(${(props) => props.img});
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 비율에 대응하는 값 (9 / 16 * 100) */
  background-image: url(${(props) => props.img});
  background-size: cover; /* 이미지가 요소에 맞게 확대 또는 축소되도록 설정 */
  background-position: center;
  background-repeat: no-repeat;
`;
