import React, { Component } from 'react';

import './item.scss';

export default class Item extends Component {

  generateStar = (ratingNumber, numberOfStar) => {
    const rating = Math.floor( ratingNumber * 2 )
    if ( rating < (numberOfStar * 2 - 1)) {
      return <span key = {numberOfStar} className = "far fa-star" />
    } else if ( rating === (numberOfStar * 2 - 1 )) {
      return <span key = {numberOfStar} className = "fas fa-star-half-alt" />
    } else {
      return <span key = {numberOfStar} className = "fas fa-star"/>
    }
  }

  generateStars = (ratingNumber) => {
    const elements = [];
    for ( let i = 1; i < 6; i++) {
      elements.push(this.generateStar(ratingNumber, i));
    }
    return (
      <div className = "item_rating">
        { elements }
      </div>
    );
  }

  render() {
    const { title, author, rating, imageURL } = this.props;
    const stars = this.generateStars(rating);
    return (
      <div className = "item">
        <div className = "item_image">
          <img src = { imageURL } />
        </div>
        <h3 className = "item_title">{ title }</h3>
        <span className = "item_author">by { author }</span>
        {stars}
      </div>
    );
  };
};