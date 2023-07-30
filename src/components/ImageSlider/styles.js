import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const ImageSlide = styled(SwiperSlide)`
  //min-width: 771px;
  //max-height: 600px;
  //aspect-ratio: auto 16 / 9;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //img {
  //  min-width: 771px;
  //  max-height: 600px;
  //  aspect-ratio: auto 16 / 9;
  //}
`;
