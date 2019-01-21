import React, { Component } from 'react';

import './history.scss';

export default class History extends Component {

  checkDestination = (dest) => {
    if ( dest !== undefined ) {
      return (
        <React.Fragment>
          to your
          <span className = "history-text_highlighted"> { dest }. </span>
        </React.Fragment>
      )
    }
  }
  
  timeAgo = ( minutesAgo ) => {
    if ( minutesAgo < 1 ) {
      return ('less than minute ago');
    } else if  ( minutesAgo === 1 ) {
      return ('1 minute ago');
    } else if ( minutesAgo < 60 ) {
      return (`${minutesAgo} minutes ago`);
    } else if ( Math.floor(minutesAgo / 60) < 24 ) {
      return (`${Math.floor(minutesAgo / 60)} hours ago`);
    } else if ( Math.floor(minutesAgo / 60 / 24) === 1 ) {
      return (`a day ago`);
    } else {
      return (`${Math.floor(minutesAgo / 60 / 24)} days ago`);
    }
  }
  
  getItem = (item) => {
    const { time, title, author, destination } = item;
    const now = new Date(),
          timeFromAppend = now - Date.parse(time) ;
    return (
      <li className = "history-item" key = { time }>
        <span className = "icon far fa-clock" />
        <span className = "history-description">
          <div className = "history-text">
            You added 
            <span className = "history-text_highlighted"> { title } </span>
            by 
            <span className = "history-text_highlighted"> { author } </span>
            {this.checkDestination(destination)}
          </div>
          <span className = "history-time">
            { this.timeAgo (Math.floor(timeFromAppend / 1000 / 60)) }
          </span>
        </span>
      </li>
    );
  }
  
  getItems = (arr) => {
    const elements = arr.map((item) => {
      return this.getItem(item);
    });
    return (
      <ul className = "history-list">
        {elements}
      </ul>
    )
  }

  render() {
    const history = JSON.parse(localStorage.getItem('history'))
    if ( history !== null ) {
      return (
        <div className = "sidebar_item">
          { this.getItems(history) }
        </div>
      )
    } else {
      return null;
    } 

  }
    
}