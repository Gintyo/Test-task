import React from 'react';

import './history.scss';

const checkDestination = (dest) => {
  if ( dest !== undefined ) {
    return (
      <React.Fragment>
        to your
        <span className = "history-text_highlighted"> { dest }. </span>
      </React.Fragment>
    )
  }
}

const getItem = (item) => {
  const { time, title, author, destination } = item;
  const now = new Date(),
        timeFromAppend = now - time;
  return (
    <li className = "history-item" key = { time }>
      <span className = "icon far fa-clock" />
      <span className = "history-description">
        <div className = "history-text">
          You added 
          <span className = "history-text_highlighted"> { title } </span>
          by 
          <span className = "history-text_highlighted"> { author } </span>
          {checkDestination(destination)}
        </div>
        <span className = "history-time">{ Math.floor(timeFromAppend / 1000 / 60) } minutes ago</span>
      </span>
    </li>
  );
}

const getItems = (arr) => {
  const elements = arr.map((item) => {
    return getItem(item);
  });
  return (
    <ul className = "history-list">
      {elements}
    </ul>
  )
}

const History = ({ history }) => {
    return (
      <div className = "sidebar_item">
        { getItems(history) }
      </div>
    )
}

export default History;