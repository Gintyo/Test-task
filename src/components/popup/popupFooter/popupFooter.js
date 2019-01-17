import React from 'react';

import './popupFooter.scss';

const PopupFooter = () => {
  return (
  <div className = "footer">
    <button className = "btn cancel">Cancel</button>
    <button type = "submit" className = "btn add">Add book</button>
  </div>
  );
}

export default PopupFooter;