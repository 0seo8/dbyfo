import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const ImageSlide = styled(SwiperSlide)`
  //max-width: 700px;
  height: 350px;
  flex-grow: 1;
  min-width: 600px;
  max-height: 600px;
  aspect-ratio: auto 4 / 3;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
