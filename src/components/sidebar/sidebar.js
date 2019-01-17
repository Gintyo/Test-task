import React from 'react';

import AddABook from './addABook/addABook'; 
import MainNav from './mainNav/mainNav';
import History from './history/history';

import './sidebar.scss';

const Sidebar = ({ onPopupOpen, onKeyPressOpen }) => {
    return (
        <div className = "sidebar">
          <AddABook onPopupOpen = { onPopupOpen }
                    onKeyPressOpen = { onKeyPressOpen } />
          <MainNav />
          <History />
        </div>
    )
}

export default Sidebar;