import React from 'react';

import './popupSidebar.scss';

const PopupSidebar = () => {
  
  const onPageSelect = ( evt ) => {
    const fields = document.querySelectorAll(`#popup-form fieldset`);
    fields.forEach((fieldset) => fieldset.style.display = "none");
    const sidebarItems = document.querySelectorAll(`li.popup-sidebar_item`);
    let clicked;
    for ( let i = 0; i < sidebarItems.length; i++ )
    {
      if ( evt.currentTarget === sidebarItems[i] )
        {
          clicked = i;
          break;
        }
    }
    fields[clicked].style.display = "block";
    document.querySelector('li.popup-sidebar_item.active').classList.remove('active');
    sidebarItems[clicked].classList.add('active');
  }

  return (
    <div className = "popup-sidebar">
      <ul>
        <li className = "popup-sidebar_item active"
            onClick = { onPageSelect }>
          <span className = "icon fa fa-align-center fa-fw" />
          <span className = "item-text">General</span>
        </li>
        <li className = "popup-sidebar_item" 
            tabIndex = "0"
            onClick = { onPageSelect }>
          <span className = "icon fa fa-tags fa-fw" />
          <span className = "item-text">Genre</span>
        </li>
        <li className = "popup-sidebar_item" 
            tabIndex = "0">
          <span className = "icon far fa-file-image fa-fw" />
          <span className = "item-text">Poster</span>
        </li>
        <li className = "popup-sidebar_item" tabIndex = "0">
          <span className = "icon fa fa-info-circle fa-fw" />
          <span className = "item-text">Info</span>
        </li>
      </ul>
    </div>
  );
};

export default PopupSidebar;