import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.scss';

type Props = {
  leftArrowName: string;
  rigthArrowName: string;
  children: React.ReactElement<any>;
};

export const CardSlider: React.FC<Props> = ({
  leftArrowName,
  rigthArrowName,
  children,
}) => {
  return (
    <Swiper
      className="swiper-cards"
      autoHeight
      slidesPerView={1}
      modules={[Navigation]}
      navigation={{
        prevEl: `.${leftArrowName}`,
        nextEl: `.${rigthArrowName}`,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {[1, 2, 4, 5, 6, 7].map(() => (
        <SwiperSlide>{children}</SwiperSlide>
      ))}
    </Swiper>
  );
};
