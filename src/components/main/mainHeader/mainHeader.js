import React from 'react';

import Header from './header/header';
import Filter from './filter/filter';

import './mainHeader.scss';

const MainHeader = () => {
    return (
      <div className = "main-header">
        <Header />
        <Filter />
      </div>
    );
}

export default MainHeader;