import React, { Component } from 'react';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';
import Popup from '../popup/popup'

import './app.scss';

export default class App extends Component {

  state = {
    isPopup: false
  }

  componentDidUpdate = () => {
    if (this.state.isPopup){
      document.querySelector('.general-page label:first-child input').focus();
    }
  }

  onPopupCancel = () => {
    this.setState(() => {
      return {isPopup: false};
    });
  }

  onPopupOpen = () => {
    this.setState(() => {
      return {isPopup: true};
    });
  }
  
  onKeyPressOpen = (evt) => {
    if ( evt.key === 'Enter' ) {
      this.onPopupOpen();
    }
  }

  render() {
    return (
      <content className = "application">
        <Sidebar onPopupOpen = { this.onPopupOpen }
                 onKeyPressOpen = { this.onKeyPressOpen } />
        <Main />
        { this.state.isPopup ? <Popup onPopupCancel = { this.onPopupCancel } /> : null }
      </content>
    );
  }
}