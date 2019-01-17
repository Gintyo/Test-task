import React from 'react';

import './popupMain.scss';

const PopupMain = () => {
  return (
  <div className = "popupMain">
    <form>
      <label> 
        Title
        <span className = "nessesary">*</span> 
        <input type = "text" placeholder = "Enter Title" /> 
      </label>
      <label> 
        Author
        <span className = "nessesary">*</span> 
        <input type = "text" placeholder = "Enter Author" /> 
      </label>
      <label> 
        Publisher
        <span className = "nessesary">*</span> 
        <input type = "text" placeholder = "Enter Publisher" /> 
      </label>
      <div className = "label-container">
        <label> 
          Paperback
          <input type = "text" placeholder = "Enter Paperback" /> 
        </label>
        <label> 
          ISBN
          <span className = "nessesary">*</span> 
          <input type = "text" placeholder = "Enter ISBN" /> 
        </label>
      </div>
      <label> 
        Summary
        <input type = "text" placeholder = "Enter Summary" /> 
      </label>
    </form>
  </div>
  );
}

export default PopupMain;