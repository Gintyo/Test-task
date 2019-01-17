import React from 'react';

import './popupHeader.scss';

const PopupHeader = () => {
  return (
  <div className = "popup-header">
    <h3 className = "popup-header_caption">Add New Books</h3>
    <span className = "popup-header_close fa fa-times" tabIndex = "0" />
  </div>
  );
}

export default PopupHeader;