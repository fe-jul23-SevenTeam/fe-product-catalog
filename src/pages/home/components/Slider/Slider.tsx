import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import banner from '../../../../assets/iPhone-15-Pro.png';
import bannerMobile from '../../../../assets/banner-for-mobile.png';
import arrowLeftBlack from '../../../../assets/icons/arrow-left_icon.svg';
import arrowRightBlack from '../../../../assets/icons/arrow-right_icon.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';

export const Slider: React.FC = () => {
  return (
    <section className="slider">
      <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        speed={800}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-slide__main-arrow-right',
          prevEl: '.swiper-slide__main-arrow-left',
        }}
      >
        {[1, 2, 3].map(item => (
          <SwiperSlide key={item}>
            <div className="swiper-slide__img-box">
              <img className="swiper-slide__img" src={banner} alt="banner" />

              <img
                className="swiper-slide__img-mobile"
                src={bannerMobile}
                alt="banner"
              />
            </div>
          </SwiperSlide>
        ))}
        <button
          className="swiper-slide__main-arrow swiper-slide__main-arrow-left"
          type="button"
          aria-label="arrow-left"
        >
          <img src={arrowLeftBlack} alt="arrow_left_black" />
        </button>

        <button
          className="swiper-slide__main-arrow swiper-slide__main-arrow-right"
          type="button"
          aria-label="arrow-right"
        >
          <img src={arrowRightBlack} alt="arrow_right_black" />
        </button>
      </Swiper>
    </section>
  );
};
