import img1 from '../img/book-cover-1-min.jpg';
import img2 from '../img/book-cover-2-min.jpg';
import img3 from '../img/book-cover-3-min.jpg';
import img4 from '../img/book-cover-4-min.jpg';
import img5 from '../img/book-cover-5-min.jpg';
import img6 from '../img/book-cover-6-min.jpg';
import img7 from '../img/book-cover-7-min.jpg';
import img8 from '../img/book-cover-8-min.jpg';
import img9 from '../img/book-cover-9-min.jpg';
import img10 from '../img/book-cover-10-min.jpg';

export default class LocalStorageService {
    
_jsonExample = {
  items : [
  {
      "title": "Jewels of Nizam",
      "author": "Geeta Devi",
      "publisher": "SPBbook1",
      "isbn": "1",
      "rating": "5",
      "paperback": "",
      "summary": "Summary1",
      "imageURL" : img1,
      "recent": "true",
      "popular": "true",
      "free": "true"
  },
  {
      "title": "Cakes & Bakes",
      "author": "Sanjeev Kapoor",
      "publisher": "SPBbook2",
      "isbn": "2",
      "rating": "5",
      "paperback": "",
      "Summary": "Summary2",
      "imageURL": img2,
      "recent": "true",
      "popular": "true",
      "free": "false"
  },
  {
      "title": "Jamie’s Kitchen",
      "author": "Jamie Oliver",
      "publisher": "SPBbook3",
      "isbn": "3",
      "rating": "4.5",
      "paperback": "",
      "Summary": "Summary3",
      "imageURL": img3,
      "recent": "true",
      "popular": "true",
      "free": "false"
  },
  {
      "title": "Inexpensive Family Meals",
      "author": "Simon Holst",
      "publisher": "SPBbook4",
      "isbn": "4",
      "rating": "4",
      "paperback": "",
      "Summary": "Summary4",
      "imageURL": img4,
      "recent": "true",
      "popular": "false",
      "free": "false"
  },
  {
      "title": "Paleo Slow Cooking",
      "author": "Chrissy Gower",
      "publisher": "SPBbook5",
      "isbn": "5",
      "rating": "4.5",
      "paperback": "",
      "Summary": "Summary5",
      "imageURL": img5,
      "recent": "true",
      "popular": "false",
      "free": "false"
  },
  {
      "title": "Cook Like an Italian",
      "author": "Tobie Puttock",
      "publisher": "SPBbook6",
      "isbn": "6",
      "rating": "4",
      "paperback": "",
      "Summary": "Summary6",
      "imageURL": img6,
      "recent": "true",
      "popular": "false",
      "free": "false"
  },
  {
      "title": "Suneeta Vaswani",
      "author": "Geeta Devi",
      "publisher": "SPBbook",
      "isbn": "7",
      "rating": "5",
      "paperback": "",
      "Summary": "Summary7",
      "imageURL": img7,
      "recent": "false",
      "popular": "false",
      "free": "false"
  },
  {
      "title": "Jamie Does",
      "author": "Jamie Oliver",
      "publisher": "SPBbook8",
      "isbn": "8",
      "rating": "4",
      "paperback": "8",
      "Summary": "Summary8",
      "imageURL": img8,
      "recent": "false",
      "popular": "false",
      "free": "false"
  },
  {
      "title": "Jamie’s italy",
      "author": "Jamie Oliver",
      "publisher": "SPBbook9",
      "isbn": "9",
      "rating": "5",
      "paperback": "9",
      "Summary": "Summary9",
      "imageURL": img9,
      "recent": "false",
      "popular": "false",
      "free": "false"
  },
  {
      "title": "Vegetables Cookbook",
      "author": "Matthew Biggs",
      "publisher": "SPBbook",
      "isbn": "10",
      "rating": "3.5",
      "paperback": "",
      "Summary": "Summary10",
      "imageURL": img10,
      "recent": "false",
      "popular": "false",
      "free": "false"
  }],
  history: []}

  dataToLocal = async () => {
    localStorage.setItem('items',JSON.stringify(this._jsonExample.items));
    if ( localStorage.getItem('history') === null ){
      localStorage.setItem('history',JSON.stringify(this._jsonExample.history));
    }
  }
}