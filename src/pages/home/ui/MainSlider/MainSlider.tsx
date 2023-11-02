import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left_icon.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right_icon.svg';

// Images

import iphone from 'assets/slides/iphone.png';
import iphoneMobile from 'assets/slides/iphoneMobile.png';
import appleWatch from 'assets/slides/appleWatch.png';
import appleWatchMobile from 'assets/slides/appleWatchMobile.png';
import ipad from 'assets/slides/ipad.png';
import ipadMobile from 'assets/slides/ipadMobile.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainSlider.scss';

const slides = [
  {
    image: iphone,
    imageMobile: iphoneMobile,
    alt: 'Iphone 15 new model',
  },
  {
    image: appleWatch,
    imageMobile: appleWatchMobile,
    alt: 'Apple watch new model',
  },
  {
    image: ipad,
    imageMobile: ipadMobile,
    alt: 'Ipad new model',
  },
];

export const MainSlider: React.FC = () => {
  return (
    <section className="slider">
      <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-slide__main-arrow-right',
          prevEl: '.swiper-slide__main-arrow-left',
        }}
      >
        {slides.map(slideInfo => (
          <SwiperSlide key={slideInfo.alt}>
            <div className="swiper-slide__img-box">
              <img
                className="swiper-slide__img"
                src={slideInfo.image}
                alt={slideInfo.alt}
              />

              <img
                className="swiper-slide__img-mobile"
                src={slideInfo.imageMobile}
                alt={slideInfo.alt}
              />
            </div>
          </SwiperSlide>
        ))}
        <button
          className="swiper-slide__main-arrow swiper-slide__main-arrow-left"
          type="button"
          aria-label="arrow-left"
        >
          <ArrowLeft className="swiper-slide__main-arrow-icon" />
        </button>

        <button
          className="swiper-slide__main-arrow swiper-slide__main-arrow-right"
          type="button"
          aria-label="arrow-right"
        >
          <ArrowRight className="swiper-slide__main-arrow-icon" />
        </button>
      </Swiper>
    </section>
  );
};
