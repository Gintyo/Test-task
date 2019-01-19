import React from 'react';

import './popupHeader.scss';

const PopupHeader = ({onPopupCancel, onKeyPressCancel, readingMode}) => {
  return (
  <div className = "popup-header">
    <h3 className = "popup-header_caption">{ readingMode ? 'Read the Book' : 'Add New Books' }</h3>
    <span className = "popup-header_close fa fa-times" 
          tabIndex = "0" 
          onClick = {onPopupCancel}
          onKeyPress = {onKeyPressCancel}
          />
  </div>
  );
}

export default PopupHeader;