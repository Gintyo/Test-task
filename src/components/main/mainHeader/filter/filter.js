import React, { Component } from 'react';

import './filter.scss';


const filterButtons = [
  { name: 'all', label: 'All Books' },
  { name: 'recent', label: 'Most Recent' },
  { name: 'popular', label: 'Most Popular' },
  { name: 'free', label: 'Free Books' }
];

export default class Filter extends Component {

  state = {
    term: ''   // searchbar value
  };

  buttons = () => {return (filterButtons.map( ({ name, label }) => { 
    const isActive = name === this.props.filter;
    const classNames = 'btn' + (isActive ? ' active' : '');
    return (
      <button key = { name }
              className = { classNames } 
              disabled = { isActive ? true : false }
              onClick = { () => this.props.onFilterChange(name) }>
          { label }
      </button>
    )
  }))};

  render () {
    return (
      <div className = "filter">
        <div className = "filter-btn-container">
          { this.buttons() }
        </div>
        <div className = "filter-searchbar-container">
          <input type = "text" className = "filter_searchbar" 
                 placeholder = "Enter Keywords" 
                 onChange = { (evt) => this.props.onSearchChange(evt.target.value) } />
          <span className = "icon fa fa-search" />
        </div>
      </div>
    );
  }
}