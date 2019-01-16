import React from 'react';

import MainHeader from './mainHeader/mainHeader';
import FilterResult from './filterResult/filterResult';

import './main.scss';

const Main = () => {
    return (
        <div className = "main">
            <MainHeader />
            <FilterResult />
        </div>
    );
}

export default Main;