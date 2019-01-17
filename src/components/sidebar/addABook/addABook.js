import React from 'react';

import './addABook.scss';

const AddABook = ({ onPopupOpen, onKeyPressOpen }) => {
  return (
    <div className = "sidebar_item">
      <button className = "btn btn-add"
              onClick = { onPopupOpen }
              onKeyPress = { onKeyPressOpen } > 
        <span className = "icon fa fa-plus" />
        <span className = "btn-text"> Add a book </span>
      </button>
    </div>
  )
}

export default AddABook;