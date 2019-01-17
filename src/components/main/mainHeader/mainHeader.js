import React from 'react';

import Header from './header/header';
import Filter from './filter/filter';

import './mainHeader.scss';

const MainHeader = ( {onFilterChange, onSearchChange, filter} ) => {
    return (
      <div className = "main-header">
        <Header />
        <Filter  onFilterChange = { onFilterChange }
                 onSearchChange = { onSearchChange }
                 filter = { filter } />
      </div>
    );
}

export default MainHeader;