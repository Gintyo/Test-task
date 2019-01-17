import React from 'react';

import './popupFooter.scss';

const PopupFooter = ({onPopupCancel, onKeyPressCancel}) => {
  return (
  <div className = "footer">
    <button className = "btn cancel"
            onClick = { onPopupCancel }
            onKeyPress = { onKeyPressCancel }>
      Cancel
    </button>
    <button type = "submit" 
            className = "btn add"
            form = "popup-form">Add book</button>
  </div>
  );
}

export default PopupFooter;