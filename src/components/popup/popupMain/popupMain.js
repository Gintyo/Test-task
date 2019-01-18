import React from 'react';

import './popupMain.scss';



const PopupMain = ({ onLabelChange }) => {

  return (
  <div className = "popupMain">
    <form id = "popup-form" >
      <fieldset className = "general-page">
        <label> 
          Title
          <span className = "nessesary">*</span> 
          <input type = "text" 
                 placeholder = "Enter Title" 
                 name = "title" 
                 onChange = { onLabelChange } /> 
        </label>
        <label> 
          Author
          <span className = "nessesary">*</span> 
          <input type = "text" 
                 placeholder = "Enter Author" 
                 name = "author" 
                 onChange = { onLabelChange } /> 
        </label>
        <label> 
          Publisher
          <span className = "nessesary">*</span> 
          <input type = "text" 
                 placeholder = "Enter Publisher" 
                 name = "publisher"
                 onChange = { onLabelChange } /> 
        </label>
        <div className = "label-container">
          <label> 
            Paperback
            <input type = "text" 
                   placeholder = "Enter Paperback" 
                   name = "paperback" /> 
          </label>
          <label> 
            ISBN
            <span className = "nessesary">*</span> 
            <input type = "number" 
                   pattern="[0-9]{1,10}"
                   placeholder = "Enter ISBN" 
                   name = "ISBN" 
                   onChange = { onLabelChange } /> 
          </label>
        </div>
        <label> 
          Summary
          <input type = "text" placeholder = "Enter Summary" name = "summary" /> 
        </label>
      </fieldset>

      <fieldset className = "genre-page">
        <label> 
          Genre
          <input type = "text" placeholder = "Enter Genre" name = "genre" /> 
        </label>
      </fieldset>
    </form>
  </div>
  );
}

export default PopupMain;