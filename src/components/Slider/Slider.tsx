import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import banner from '../../assets/iPhone-15-Pro.png';
import bannerMobile from '../../assets/banner-for-mobile.png';
import arrowLeft from '../../assets/icons/arrow-left_icon.svg';
import arrowRight from '../../assets/icons/arrow-right_icon.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';
import { useRef } from 'react';

export const Slider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="slider">
      <div className="wrapper">
        <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>
        <Swiper
          ref={swiperRef}
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
          on={{
            init: () => {
              const swiper = swiperRef.current;
              if (swiper) {
                swiper.navigation.init();
              }
            },
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
            <img src={arrowLeft} alt="arrow_left_black" />
          </button>

          <button
            className="swiper-slide__main-arrow swiper-slide__main-arrow-right"
            type="button"
            aria-label="arrow-right"
          >
            <img src={arrowRight} alt="arrow_right_black" />
          </button>
        </Swiper>
      </div>
    </section>
  );
};