import React from 'react';

import './addABook.scss';

const AddABook = () => {
  return (
    <div className = "sidebar_item">
      <button className = "btn btn-add"> 
        <span className = "fa fa-plus" /> { /* icon */ }
        <span className = "btn-text"> Add a book </span>
      </button>
    </div>
  )
}

export default AddABook;