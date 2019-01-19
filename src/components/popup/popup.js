import React, { Component } from 'react';

import PopupHeader from './popupHeader/popupHeader';
import PopupSidebar from './popupSidebar/popupSidebar';
import PopupMain from './popupMain/popupMain';
import PopupFooter from './popupFooter/popupFooter';
import SuccessWindow from './successWindow/successWindow'

import './popup.scss';

export default class Popup extends Component {

  state = {
    submitSuccess: false,
  }

  addedBook = {
    title: '',
    author: '',
    publisher: '',
    isbn: '',
    time: null
  }

  componentDidMount = () => {
    if (!this.props.readingMode){  //on popup open set focus on first input
      document.querySelector('.general-page label:first-child input').focus();
    };
  };
  
  onKeyPressCancel = (evt) => {
    if ( evt.key === 'Enter' ) {
      this.props.onPopupCancel();
    }
  }

  onLabelChange = (evt) => {
    evt.target.classList.remove('invalid');
    this.addedBook[evt.target.name] = evt.target.value;
  }

  onSubmit = (evt) => {
    const time = new Date();
    this.addedBook.time = time;
    this.setState(() => { return {submitSuccess: true} } );
    this.props.onPopupSubmit(this.addedBook);
  }

  render() {
    if ( !this.state.submitSuccess ) {
      return (
        <div className = "popup-backdrop">
          <div className = "popup-window">
            <PopupHeader onPopupCancel = { this.props.onPopupCancel } 
                         onKeyPressCancel = { this.onKeyPressCancel } 
                         readingMode = { this.props.readingMode } />
            <div className = "popup-main">
              <PopupMain onLabelChange = { this.onLabelChange }  
                         readingMode = { this.props.readingMode } 
                         readedItem = { this.props.readedItem } />
              <PopupSidebar />
            </div>
            <PopupFooter onPopupCancel = { this.props.onPopupCancel } 
                         onKeyPressCancel = { this.onKeyPressCancel }
                         onSubmit = { this.onSubmit }  
                         readingMode = { this.props.readingMode } />
          </div>
        </div>
      );
    } else {
      return (
        <div className = "popup-backdrop">
          <SuccessWindow onPopupCancel = { this.props.onPopupCancel } 
                         onKeyPressCancel = { this.onKeyPressCancel }
                         item = { this.addedBook } />
        </div>
      );
    }
  }
}