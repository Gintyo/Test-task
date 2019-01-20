import React, { Component } from 'react';

import LocalStorageService from '../../services/localStorageService'
import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';
import Popup from '../popup/popup'

import './app.scss';
import './fontawesome/css/all.css';

export default class App extends Component {

  state = {
    loaded: false,
    isPopup: false,
    readingMode: false
  }

  readedItem = {}

  localStorageService = new LocalStorageService();
  
  componentDidMount = async () => {
    if ( !this.state.loaded ){
      await this.localStorageService.dataToLocal();
      this.setState(() => {return {loaded: true}} );
    }
  }

  onPopupCancel = () => {
    this.setState(() => {
      return {isPopup: false, readingMode: false};
    });
    document.body.style.overflowY = 'inherit';
  };

  onPopupOpen = () => {
    this.setState(() => {
      return {isPopup: true};
    });
    document.body.style.overflowY = 'hidden';
  };

  onEnterDo = (evt, callback) => {
    if ( evt.key === 'Enter' ) {
      callback(evt);
    };
  };

  onPopupSubmit = ( item ) => {
    const items = JSON.parse(localStorage.getItem('items'));
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));

    const time = new Date();
    item.time = time;
    const history = JSON.parse(localStorage.getItem('history'));
    let arr = [];
    if ( history.length === 3 ) {
      arr = [ ...history.slice(0, 2) ];
    } else {
      arr = [ ...history.slice() ];
    }
    arr.unshift(item);
    localStorage.setItem('history', JSON.stringify(arr));
  };

  onReading = ( evt ) => {
    const items = JSON.parse(localStorage.getItem('items'));
    this.readedItem = items.find((item) => item.isbn === evt.currentTarget.id);
    this.setState(() => {
      return {isPopup: true, readingMode: true};
    });
    document.body.style.overflowY = 'hidden';
  }

  render() {
    return (
      <content className = "application">
        <Sidebar onPopupOpen = { this.onPopupOpen } />
        <Main    onReading = { this.onReading } 
                 onEnterPressReading = { (evt) => this.onEnterDo(evt, this.onReading) }
                 loaded = { this.state.loaded } />
        { this.state.isPopup &&
          <Popup onPopupCancel = { this.onPopupCancel }
                 onPopupSubmit = { this.onPopupSubmit } 
                 readingMode = { this.state.readingMode } 
                 readedItem = { this.readedItem }/>
        }
      </content>
    );
  };
}