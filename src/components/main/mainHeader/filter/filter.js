import React from 'react';

import './filter.scss';


const filterButtons = [
  { name: 'all', label: 'All Books' },
  { name: 'recent', label: 'Most Recent' },
  { name: 'popular', label: 'Most Popular' },
  { name: 'free', label: 'Free Books' }
];

  
const Filter = ({ onFilterChange, onSearchChange, filter }) => {

  const buttons = () => {return (filterButtons.map( ({ name, label }) => { 
    const isActive = name === filter;
    const classNames = 'btn' + (isActive ? ' active' : '');
    return (
      <button key = { name }
              className = { classNames } 
              disabled = { isActive ? true : false }
              onClick = { () => onFilterChange(name) }>
          { label }
      </button>
    )
  }))};

  return (
    <div className = "filter">
      <div className = "filter-btn-container">
        { buttons() }
      </div>
      <div className = "filter-searchbar-container">
        <input type = "text" className = "filter_searchbar" 
                placeholder = "Enter Keywords" 
                onChange = { (evt) => onSearchChange(evt.target.value) } />
        <span className = "icon fa fa-search" />
      </div>
    </div>
  );
}

export default Filter;