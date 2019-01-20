import React from 'react';

import './popupFooter.scss';

const PopupFooter = ({onPopupCancel, onKeyPressCancel, onSubmit, readingMode }) => {

  const validateOnSubmit = (evt) => {
    evt.preventDefault();
    let valid = true;

    const fields = document.querySelectorAll(`#popup-form fieldset`);
    const sidebarItems = document.querySelectorAll(`li.popup-sidebar_item`);
    fields.forEach((fieldset) => fieldset.style.display = "none");
    fields[0].style.display = "block";
    document.querySelector('li.popup-sidebar_item.active').classList.remove('active');
    sidebarItems[0].classList.add('active');
    
    const title = document.querySelector('input[name = "title"]'),
          author = document.querySelector('input[name = "author"]'),
          publisher = document.querySelector('input[name = "publisher"]'),
          isbn = document.querySelector('input[name = "isbn"]');

    [title, author, publisher, isbn].forEach((item) => {
      if (item.value.replace(/\s/g, '') === '')
        {
          valid = false;
          item.classList.add('invalid');
          item.placeholder = 'Can\'t be empty';
          item.value = '';
        }
    } )
    
    if ( valid ) { onSubmit() };
  }

  return (
  <div className = "footer">
    <button className = "btn cancel"
            onClick = { onPopupCancel }
            onKeyPress = { onKeyPressCancel }>
      Cancel
    </button>
    { !readingMode     // in reading Mode do not show the add button
    ? (<button type = "submit" 
            className = "btn add"
            form = "popup-form"
            onClick = { validateOnSubmit } >
        Add book
        </button>) 
    : null }
  </div>
  );
}

export default PopupFooter;