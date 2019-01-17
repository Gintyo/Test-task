import React, { Component } from 'react';

import './filter.scss';


const filterButtons = [
  { name: 'all', label: 'All Books' },
  { name: 'recent', label: 'Most Recent' },
  { name: 'popular', label: 'Most Popular' },
  { name: 'free', label: 'Free Books' }
];

export default class Filter extends Component {
// = ( {onFilterChange, onSearchChange, filter} ) => 
  state = {
    term: ''
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
  }))}

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };
  render () {
    return (
      <div className = "filter">
        <div className = "filter-btn-container">
          { this.buttons() }
        </div>
        <div className = "filter-searchbar-container">
          <input type = "text" className = "filter_searchbar" 
                 placeholder = "Enter Keywords" 
                 onChange = { this.onTermChange } />
          <span className = "icon fa fa-search" />
        </div>
      </div>
    );
  }
}