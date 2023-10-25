import React from 'react';

import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { ReactComponent as Logo } from '../../assets/Logo-svg.svg';
import { HeaderButtons } from '../HeaderButtons/HeaderButtons';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo logo">
          <Link to="/home">
            <Logo className="logo__img" />
          </Link>
        </div>

        <Navigation />
      </div>

      <HeaderButtons />
    </header>
  );
};
