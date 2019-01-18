import React, { Component } from 'react';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';
import Popup from '../popup/popup'

import './app.scss';

export default class App extends Component {

  now = new Date();

  state = {
    isPopup: false,
    history: [{ 
      title: "Fight Club",
      author: "Chuck Palahniuk",
      time: this.now - (1000 * 60 * 24),
      destination: "Must Read Titles",
    },
    { 
      title: "The Trial",
      author: "Franz Kafka",
      time: this.now - (1000 * 60 * 48),
      destination: "Must Read Titles",
    }],
    readingMode: false
  }

  onPopupCancel = () => {
    this.setState(() => {
      return {isPopup: false};
    });
  };

  onPopupOpen = () => {
    this.setState(() => {
      return {isPopup: true};
    });
  };
  
  onKeyPressOpen = (evt) => {
    if ( evt.key === 'Enter' ) {
      this.onPopupOpen();
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

  render() {
    return (
      <content className = "application">
        <Sidebar onPopupOpen = { this.onPopupOpen }
                 onKeyPressOpen = { this.onKeyPressOpen } 
                 history = { this.state.history } />
        <Main />
        { this.state.isPopup 
          ? <Popup onPopupCancel = { this.onPopupCancel }
                   onPopupSubmit = { this.onPopupSubmit } /> 
          : null 
        }
      </content>
    );
  };
}