import React, { Component } from 'react';

import PopupHeader from './popupHeader/popupHeader';
import PopupSidebar from './popupSidebar/popupSidebar';
import PopupMain from './popupMain/popupMain';
import PopupFooter from './popupFooter/popupFooter';
import SuccessWindow from './successWindow/successWindow'

import './popup.scss';

export default class Popup extends Component {

  state = {
    readingMode: false,
    submitSuccess: false,
  }

  addedBook = {
    title: '',
    author: '',
    publisher: '',
    ISBN: '',
    time: null
  }

  componentDidMount = () => {
    if (!this.state.readingMode){  //on popup open set focus on first input
      document.querySelector('.general-page label:first-child input').focus();
    };
  };
  
  onKeyPressCancel = (evt) => {
    if ( evt.key === 'Enter' ) {
      this.props.onPopupCancel();
    }
  }

  onLabelChange = (evt) => {
    this.addedBook[evt.target.name] = evt.target.value;
  }

  onSubmit = (evt) => {
    const time = new Date();
    this.addedBook.time = time;
    const fields = document.querySelectorAll(`#popup-form fieldset`);
    const sidebarItems = document.querySelectorAll(`li.popup-sidebar_item`);
    fields.forEach((fieldset) => fieldset.style.display = "none");
    fields[0].style.display = "block";
    document.querySelector('li.popup-sidebar_item.active').classList.remove('active');
    sidebarItems[0].classList.add('active');
    
    evt.preventDefault();

    this.setState(() => { return {submitSuccess: true} } );
    this.props.onPopupSubmit(this.addedBook);
  }

  render() {
    if ( !this.state.submitSuccess ) {
      return (
        <div className = "popup-backdrop">
          <div className = "popup-window">
            <PopupHeader 
              onPopupCancel = { this.props.onPopupCancel } 
              onKeyPressCancel = { this.onKeyPressCancel } />
            <div className = "popup-main">
              <PopupMain onLabelChange = { this.onLabelChange } />
              <PopupSidebar />
            </div>
            <PopupFooter 
              onPopupCancel = { this.props.onPopupCancel } 
              onKeyPressCancel = { this.onKeyPressCancel }
              onSubmit = { this.onSubmit } />
          </div>
        </div>
      );
    } else {
      return (
        <div className = "popup-backdrop">
          <SuccessWindow 
            onPopupCancel = { this.props.onPopupCancel } 
            onKeyPressCancel = { this.onKeyPressCancel } 
            item = { this.addedBook } />
        </div>
      );
    }
  }
}