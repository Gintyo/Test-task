import React from 'react';

import AddABook from './addABook/addABook'; 
import MainNav from './mainNav/mainNav';
import History from './history/history';

import './sidebar.scss';

const Sidebar = ({ onPopupOpen, onKeyPressOpen, history }) => {
    return (
        <div className = "sidebar">
          <AddABook onPopupOpen = { onPopupOpen }
                    onKeyPressOpen = { onKeyPressOpen } />
          <MainNav />
          <History history = { history } />
        </div>
    )
}

export default Sidebar;