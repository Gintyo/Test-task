import React, { Component } from 'react';

import './history.scss';

export default class History extends Component {

  state = {
    history: [{ 
      name: "Fight Club",
      author: "Chuck Palahniuk",
      time: 24,
      destination: "Must Read Titles",
    },
    { 
      name: "The Trial",
      author: "Franz Kafka",
      time: 48,
      destination: "Must Read Titles",
    }]
  }

  getItem = (item) => {
    const { time, name, author, destination } = item;
    return (
      <li className = "history-item" key = { time }>
        <span className = "icon far fa-clock" />
        <span className = "history-description">
          <div className = "history-text">
            You added <span className = "history-text_highlighted"> { name } </span>
            by <span className = "history-text_highlighted"> { author } </span>to your
            <span className = "history-text_highlighted"> { destination } </span>.
          </div>
          <span className = "history-time">{ time } minutes ago</span>
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
  
  render(){
    const { history } = this.state;
    return (
      <div className = "sidebar_item">
        {this.getItems(history)}
      </div>
    )
  } 
}