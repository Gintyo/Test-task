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
    } else {
      const keywords = search.split(' ');
      const arr = items.filter((item) => {
        let isMatches = false;
        for (let i = 0; i < keywords.length; i++) {
          if ( keywords[i] !== '' && item.title.toLowerCase().indexOf(keywords[i].toLowerCase()) > -1 ){
            isMatches = true;
          }
        }
        return isMatches
      })
       
      return arr;
    }
  };

  render() {
    if ( this.state.loaded ) {
      const itemsArray = JSON.parse(localStorage.getItem('items'));
      const filteredArray = this.searchItems( this.filterItems(itemsArray), this.props.search );
      const allItems = filteredArray.map((item) => {
        const { isbn, ...itemProps  } = item;
        return (
          <div id = { isbn } key = { isbn } 
               onClick = { this.props.onReading } 
               onKeyPress = { this.props.onEnterPressReading } >
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