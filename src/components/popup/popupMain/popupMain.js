import React from 'react';

import './popupMain.scss';

const PopupMain = () => {
  return (
  <div className = "popupMain">
    <form id = "popup-form" >
      <fieldset className = "general-page">
        <label> 
          Title
          <span className = "nessesary">*</span> 
          <input type = "text" placeholder = "Enter Title" name = "Title" /> 
        </label>
        <label> 
          Author
          <span className = "nessesary">*</span> 
          <input type = "text" placeholder = "Enter Author" name = "Author" /> 
        </label>
        <label> 
          Publisher
          <span className = "nessesary">*</span> 
          <input type = "text" placeholder = "Enter Publisher" name = "Publisher" /> 
        </label>
        <div className = "label-container">
          <label> 
            Paperback
            <input type = "text" placeholder = "Enter Paperback" name = "Paperback" /> 
          </label>
          <label> 
            ISBN
            <span className = "nessesary">*</span> 
            <input type = "text" placeholder = "Enter ISBN" name = "ISBN" /> 
          </label>
        </div>
        <label> 
          Summary
          <input type = "text" placeholder = "Enter Summary" name = "Summary" /> 
        </label>
      </fieldset>
      <fieldset className = "genre-page">
        <label> 
          Genre
          <input type = "text" placeholder = "Enter Genre" name = "Genre" /> 
        </label>
      </fieldset>
    </form>
  </div>
  );
}

export default PopupMain;