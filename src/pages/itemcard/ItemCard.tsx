import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/home_icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right_icon.svg';

import './ItemCard.scss';
import { PhonePhotos } from '../../components/PhoneDetails/PhonePhotos';
import { PhoneActions } from '../../components/PhoneDetails/PhoneActions';
import { BackButton } from '../../components/BackButton/BackButton';

export const ItemCard = () => {
  return (
    <div className="phone">
      <div className="breadcrumbs">
        <Link className="breadcrumbs__home" to="/">
          <HomeIcon />
        </Link>

        <ArrowRightIcon className="breadcrumbs__arrow" />

        <Link
          className="breadcrumbs__phones breadcrumbs__category"
          to="/category"
        >
          category
        </Link>

        <ArrowRightIcon className="breadcrumbs__arrow" />
        <p>name of product</p>
      </div>

      <BackButton />

      <h1 className="phone__title">Name of Phone</h1>

      <div className="phone__container">
        <div className="phone__details">
          <PhonePhotos />
          <PhoneActions />
        </div>

        <div className="phone__description">
          <div className="phone__about about">
            <h2 className="about__title">About</h2>

            {/* використати map щоб достати всі about дані */}
            <h3 className="about__subtitle">subtitle</h3>
            {/* використати map щоб достати всі text дані */}
            <p className="about__text">some text</p>
          </div>

          <div className="phone__tech-specs tech-specs">
            <h2 className="tech-specs__title">Tech specs</h2>

            {/* якщо є пенва категорія додати наступний блок */}
            <div className="tech-specs__categ categ">
              <div className="categ__title">Screen</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Resolution</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Processor</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">RAM</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Built in memory</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Camera</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Zoom</div>
              <div className="categ__value">value</div>
            </div>

            <div className="tech-specs__categ categ">
              <div className="categ__title">Cell</div>
              <div className="categ__value">value</div>
            </div>
          </div>
        </div>

        {/* блок з рекомендаціями */}
        <div className="phone__recommended">You may also like</div>
      </div>
    </div>
  );
};
