import React from 'react';

import './filter.scss';

const Filter = () => {
  return (
    <div className = "filter">
      <div className = "filter-btn-container">
        <button className = "btn active" tabIndex = "-1">All Books</button>
        <button className = "btn">Most Recent</button>
        <button className = "btn">Most Popular </button>
        <button className = "btn">Free Books</button>
      </div>
      <div className = "filter-searchbar-container">
        <input type = "text" className = "filter_searchbar" placeholder = "Enter Keywords" />
        <span className = "icon fa fa-search" />
      </div>
    </div>
  );
}

export default Filter;