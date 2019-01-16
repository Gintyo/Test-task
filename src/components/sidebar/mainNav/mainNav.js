import React from 'react';

import './mainNav.scss';

const MainNav = () => {
  
  const getItem = ( text, icon, isActive = false ) => { // icon variable is the fontawesome class without "fa-"
    return (
      <li className = { `main-nav-list_item ${ isActive ? "active" : "" }` }>
        <span className = { `fa fa-${ icon }` } />
        <span className = "nav-text">
          { text }
        </span>
      </li>
    );
  }


  return (
    <div className = "sidebar_item">
      <nav>
        <ul className = "main-nav-list">
          { getItem("Now Reading", "book") }
          { getItem("Browse", "globe-asia", true) }
          { getItem("Buy Books", "shopping-cart") }
          { getItem("Favourite Books", "star") }
          { getItem("Wishlist", "th-list") }
        </ul>
      </nav>
    </div>
  )
}

export default MainNav;