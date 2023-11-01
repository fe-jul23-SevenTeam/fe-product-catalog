import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryItem.scss';

interface Props {
  category: {
    title: string;
    description: string;
    imgSrc: string;
    pathname: string;
  };
}

export const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <div className="category" key={category.title}>
      <Link to={category.pathname} className="category__link">
        <div className="category__image">
          <img
            className="category__image-img"
            src={category.imgSrc}
            alt={category.title}
          />
        </div>

        <h3 className="category__name">{category.title}</h3>

        <p className="category__description">{category.description}</p>
      </Link>
    </div>
  );
};
