import React, { Component } from 'react';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';
import Popup from '../popup/popup'

import './app.scss';
import './fontawesome/css/all.css';

export default class App extends Component {

  now = new Date(); // for examples

  state = {
    isPopup: false,
    history: [{ 
      title: "Fight Club",
      author: "Chuck Palahniuk",
      time: this.now - (1000 * 60 * 24), // 24 minutes ago
      destination: "Must Read Titles",
    },
    { 
      title: "The Trial",
      author: "Franz Kafka",
      time: this.now - (1000 * 60 * 48), // 48 minutes ago
      destination: "Must Read Titles",
    }],
    readingMode: false
  }

  readedItem = {
    "title": "Vegetables Cookbook",
    "author": "Matthew Biggs",
    "publisher": "SPBbook",
    "isbn": "10",
    "rating": "3.5",
    "paperback": "",
    "summary": "Summary10",
    "recent": "false",
    "popular": "false",
    "free": "false"
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
    this.setState(({ history }) => {
      let arr = [];
      if ( history.length === 3 ) {
        arr = [ ...history.slice(0, 2) ];
      } else {
        arr = [ ...history.slice() ];
      }
      arr.unshift(item);
      return {
        history: arr
      }
    });
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
        <Sidebar onPopupOpen = { this.onPopupOpen }
                 history = { this.state.history } />
        <Main    onReading = { this.onReading } 
                 onEnterPressReading = { (evt) => this.onEnterDo(evt, this.onReading) } />
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