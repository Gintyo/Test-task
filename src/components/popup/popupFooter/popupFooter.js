import React from 'react';

import './popupFooter.scss';

const PopupFooter = ({onPopupCancel, onKeyPressCancel, onSubmit }) => {

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
          ISBN = document.querySelector('input[name = "ISBN"]');

    if (title.value === '')
      {
        valid = false;
        title.classList.add('invalid');
        title.placeholder = 'Can\'t be empty';
      }
    if (author.value === '')
      {
        valid = false;
        author.classList.add('invalid');
        author.placeholder = 'Can\'t be empty';
      }
    if (publisher.value === '')
      {
        valid = false;
        publisher.classList.add('invalid');
        publisher.placeholder = 'Can\'t be empty';
      }
    if (ISBN.value === '')
      {
        valid = false;
        ISBN.classList.add('invalid');
        ISBN.placeholder = 'Can\'t be empty';
      }

    if ( valid ) { onSubmit() };
  }

  return (
  <div className = "footer">
    <button className = "btn cancel"
            onClick = { onPopupCancel }
            onKeyPress = { onKeyPressCancel }>
      Cancel
    </button>
    <button type = "submit" 
            className = "btn add"
            form = "popup-form"
            onClick = { validateOnSubmit } >
      Add book
    </button>
  </div>
  );
}

export default PopupFooter;