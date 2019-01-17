import React, { Component } from 'react';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';
import Popup from '../popup/popup'

import './app.scss';

export default class App extends Component {

  state = {
    isPopup: false
  }

  render() {
    return (
      <content className = "application">
        <Sidebar />
        <Main />
        { this.state.isPopup ? <Popup /> : null }
      </content>
    );
  }
}