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
    if (!this.state.loaded){
      await this.localStorageService.dataToLocal();
      this.setState((state) => {return {loaded: true}});
    }
  }

  render(){
    if (this.state.loaded) {
      const itemsArray = JSON.parse(localStorage.getItem('items'));
      const allItems = itemsArray.map((item) => {
        const { ISBN, ...itemProps } = item;
        return (
          <div key = {ISBN}>
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