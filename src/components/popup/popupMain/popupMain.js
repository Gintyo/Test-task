import React from 'react';

import './popupMain.scss';



const PopupMain = ({ onLabelChange, readingMode, readedItem }) => {

  const items = {
    firstPage: [
      { title: 'Title',
        isNessesary: true },
      { title: 'Author',
        isNessesary: true },
      { title: 'Publisher',
        isNessesary: true },
      { title: 'Paperback',
        isNessesary: false },
      { title: 'ISBN',
        isNessesary: true },
      { title: 'Summary',
        isNessesary: false }],
    secondPage: [
      { title: 'Genre',
        isNessesary: false }
    ]}

  const generateItemList = ( itemsArray ) => {
    const itemList = itemsArray.map(( item ) => {
      if ( !readingMode ) {
        return (
          <label key = { item.title } className = "prop-label" > 
            { item.title }
            { item.isNessesary && <span className = "nessesary">*</span> } 
            <input type = "text"
                   className = "item-prop"
                   placeholder = {`Enter ${ item.title }`}
                   name = { item.title.toLowerCase() } 
                   onChange = { onLabelChange } /> 
          </label>
        )
      } else {
        return (
          <div  key = {item.title+ "-read"} className = "prop-label">
            { item.title }:
            <div className = "item-prop">
              { readedItem[item.title.toLowerCase()] }
            </div>
          </div>
        )
      }
      
    });
    return itemList
  }

  return (
  <div className = "popupMain">
    <form id = "popup-form" >
      <fieldset className = "general-page">
        { generateItemList(items.firstPage) }
      </fieldset>

      <fieldset className = "genre-page">
        { generateItemList(items.secondPage) }
      </fieldset>
    </form>
  </div>
  );
}

export default PopupMain;