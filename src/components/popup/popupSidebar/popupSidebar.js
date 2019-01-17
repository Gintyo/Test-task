import React from 'react';

import './popupSidebar.scss';

const PopupSidebar = () => {
  return (
    <div className = "popup-sidebar">
      <ul>
        <li className = "popup-sidebar_item active" tabIndex = "-1">
          <span className = "icon fa fa-align-center fa-fw" />
          <span className = "item-text">General</span>
        </li>
        <li className = "popup-sidebar_item" tabIndex = "0">
          <span className = "icon fa fa-tags fa-fw" />
          <span className = "item-text">Genre</span>
        </li>
        <li className = "popup-sidebar_item" tabIndex = "0">
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