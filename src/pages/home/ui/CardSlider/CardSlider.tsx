import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from 'components/ProductCard';
import { Product } from 'types/Product';

import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.scss';

type Props = {
  leftArrowName: string;
  rightArrowName: string;
  products: Product[];
};

export const CardSlider: React.FC<Props> = ({
  leftArrowName,
  rightArrowName,
  products,
}) => {
  return (
    <Swiper
      className="swiper-cards"
      autoHeight
      slidesPerView={1}
      modules={[Navigation]}
      navigation={{
        prevEl: `.${leftArrowName}`,
        nextEl: `.${rightArrowName}`,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {products.slice(0, 10).map(product => (
        <SwiperSlide>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
