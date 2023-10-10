import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ categories, onZenClick, isOnZenMode }) => (
  <header className="menu">
    <nav>
      {categories.map((category) => (
        <NavLink
          key={category.label}
          className="menu-link"
          exact
          activeClassName="menu-link--selected"
          to={category.route}
        >
          {category.label}
        </NavLink>
      ))}
      <button
        onClick={onZenClick}
        className="menu-btn"
        type="button"
      >
        {isOnZenMode ? 'Désactiver le mode zen' : 'Activer le mode zen'}
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onZenClick: PropTypes.func.isRequired,
  isOnZenMode: PropTypes.bool.isRequired,
};

export default Header;
