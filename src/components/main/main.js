import React, { Component } from 'react';

import MainHeader from './mainHeader/mainHeader';
import FilterResult from './filterResult/filterResult';

import './main.scss';

export default class Main extends Component {
  state = {
    filter: 'all',
    search: ''
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  onSearchChange = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <div className = "main">
        <MainHeader onFilterChange = { this.onFilterChange }
                    onSearchChange = { this.onSearchChange }
                    filter = { this.state.filter } />
        <FilterResult filter = { this.state.filter } 
                      search = { this.state.search } 
                      onReading = { this.props.onReading } 
                      onEnterPressReading = { this.props.onEnterPressReading }
                      loaded = { this.props.loaded } />
      </div>
    );
  }
}