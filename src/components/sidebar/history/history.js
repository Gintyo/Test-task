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

const TimeAgo = ({ minutesAgo }) => {
  if ( minutesAgo < 1 ) {
    return ('less than minute ago');
  } else if  ( minutesAgo === 1 ) {
    return ('1 minute ago');
  } else if ( minutesAgo < 60 ) {
    return (`${minutesAgo} minutes ago`);
  } else {
    return (`${Math.floor(minutesAgo / 60)} hours ago`);
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
        <span className = "history-time">
          <TimeAgo minutesAgo = { Math.floor(timeFromAppend / 1000 / 60) } />
        </span>
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