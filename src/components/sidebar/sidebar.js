import React from 'react';

import AddABook from './addABook/addABook'; 
import MainNav from './mainNav/mainNav';
import History from './history/history';

import './sidebar.scss';

const Sidebar = ({ onPopupOpen }) => {
    return (
        <div className = "sidebar">
          <AddABook onPopupOpen = { onPopupOpen } />
          <MainNav />
          <History />
        </div>
    )
}

export default Sidebar;