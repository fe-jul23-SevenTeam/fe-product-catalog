import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import './CategoriesShop.scss';

const categories = [
  {
    title: 'Mobile phones',
    description: '95 models',
    imgSrc:
      'https://be-product-catalog-fhdi.onrender.com/images/img/categories-staff/mobile-phones.5dd981d1bd9921fe180f.png',
    pathname: '/phones',
  },
  {
    title: 'Tablets',
    description: '24 models',
    imgSrc:
      'https://be-product-catalog-fhdi.onrender.com/images/img/categories-staff/tablets.ab919a9be70a5a66bd8c.png',
    pathname: '/tablets',
  },
  {
    title: 'Accessories',
    description: '100 models',
    imgSrc:
      'https://be-product-catalog-fhdi.onrender.com/images/img/categories-staff/accessories.c89ddada842650221bb3.png',
    pathname: '/accessories',
  },
];

export const CategoriesShop: React.FC = () => {
  return (
    <section className="categories wrapper">
      <div className="categories_content">
        <h2 className="categories__title">Shop by category</h2>

        <div className="categories__wrapper">
          {categories.map(category => (
            <CategoryItem category={category} key={category.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
