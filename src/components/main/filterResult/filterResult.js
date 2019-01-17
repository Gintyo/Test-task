import React, { Component } from 'react';

import LocalStorageService from '../../../services/localStorageService'
import Item from './item/item'

import './filterResult.scss';

export default class FilterResult extends Component {

  state = {
    loaded: false
  }

  localStorageService = new LocalStorageService();

  componentDidMount = async () => {
    if ( !this.state.loaded ){
      await this.localStorageService.dataToLocal();
      this.setState((state) => {return {loaded: true}});
    }
  }

  filterItems = (items) => {
    if ( this.props.filter === 'all' ) {
      return items;
    } else if ( this.props.filter === 'recent' ) {
      return items.filter( ( item ) => item.recent === 'true' );
    } else if ( this.props.filter === 'popular' ) {
      return items.filter( ( item ) => item.popular === 'true' );
    } else if ( this.props.filter === 'free' ) {
      return items.filter( ( item ) => item.free === 'true' );
    }
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    const arr = items.filter((item) => {
      const keywords = search.split(' ');
      for (let i = 0; i < keywords.length; i++) {
        if ( keywords[i] !== '' && item.title.toLowerCase().indexOf(keywords[i].toLowerCase()) > -1 )
        {return true;}
      }
    })
     
    return arr;
  };

  render(){
    if ( this.state.loaded ) {
      const itemsArray = JSON.parse(localStorage.getItem('items'));
      const filteredArray = this.searchItems( this.filterItems(itemsArray), this.props.search );
      const allItems = filteredArray.map((item) => {
        const { ISBN, ...itemProps } = item;
        return (
          <div key = { ISBN }>
            <Item { ...itemProps } />
          </div>
        )
      });
      
      return (
          <div className = "result-list">
            { allItems }
          </div>
      );
    } else {
      return null;
    }
  }
}