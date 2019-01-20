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
          <label key = { item.title }> 
            { item.title }
            { item.isNessesary && <span className = "nessesary">*</span> } 
            <input type = { item.title.toLowerCase() === "isbn" ? "number" : "text" } 
                   placeholder = {`Enter ${ item.title }`} 
                   name = { item.title.toLowerCase() } 
                   onChange = { onLabelChange } /> 
          </label>
        )
      } else {
        return (
          <p  key = {item.title+ "-read"} >
            <span className = "book-property-title">{ item.title }: </span> 
            { readedItem[item.title.toLowerCase()] }
          </p>
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