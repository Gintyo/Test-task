import React from 'react';

import PopupHeader from './popupHeader/popupHeader';
import PopupSidebar from './popupSidebar/popupSidebar';
import PopupMain from './popupMain/popupMain';
import PopupFooter from './popupFooter/popupFooter';

import './popup.scss';

const Popup = () => {
  return (
    <div className = "popup">
      <div className = "popup-window">
        <PopupHeader />
        <div className = "popup-main">
          <PopupSidebar />
          <PopupMain />
        </div>
        <PopupFooter />
      </div>
    </div>
  );
}

export default Popup;