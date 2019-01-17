import React, { Component } from 'react';

import PopupHeader from './popupHeader/popupHeader';
import PopupSidebar from './popupSidebar/popupSidebar';
import PopupMain from './popupMain/popupMain';
import PopupFooter from './popupFooter/popupFooter';

import './popup.scss';

export default class Popup extends Component {
  
  onKeyPressCancel = (evt) => {
    if ( evt.key === 'Enter' ) {
      this.props.onPopupCancel();
    }
  }

  render() {
    return (
      <div className = "popup">
        <div className = "popup-window">
          <PopupHeader 
            onPopupCancel = { this.props.onPopupCancel } 
            onKeyPressCancel = { this.onKeyPressCancel } />
          <div className = "popup-main">
            <PopupMain />
            <PopupSidebar />
          </div>
          <PopupFooter 
            onPopupCancel = { this.props.onPopupCancel } 
            onKeyPressCancel = { this.onKeyPressCancel } />
        </div>
      </div>
    );
  }
}