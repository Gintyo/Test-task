import React from 'react';

import './successWindow.scss';

const SuccessWindow = ({onPopupCancel, onKeyPressCancel, item}) => {

  const {title} = item;

  return (
    <div className = "popup-window popup-success">
      <div className = "popup-success_caption">
        {`The book "${title}" successfully added`}
      </div>
      <div className = "popup-success_footer">
        <button className = "btn popup-success_close"
                onClick = {onPopupCancel}
                onKeyPress = {onKeyPressCancel}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessWindow;