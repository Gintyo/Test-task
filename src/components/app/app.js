import React from 'react';

import Sidebar from '../sidebar/sidebar';
import Main from '../main/main';

import './app.scss';

const App = () => {
    return (
        <content className = "application">
          <Sidebar />
          <Main />
        </content>
    )
}

export default App;