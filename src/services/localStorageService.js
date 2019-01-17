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
    
_jsonExample = [
    {
        "title": "Jewels of Nizam",
        "author": "Geeta Devi",
        "publisher": "SPBbook1",
        "ISBN": "1",
        "rating": "5",
        "paperback": "",
        "Summary": "Summary1",
        "imageURL" : img1,
        "image" : ""
    },
    {
        "title": "Cakes & Bakes",
        "author": "Sanjeev Kapoor",
        "publisher": "SPBbook2",
        "ISBN": "2",
        "rating": "5",
        "paperback": "",
        "Summary": "Summary2",
        "imageURL": img2
    },
    {
        "title": "Jamie’s Kitchen",
        "author": "Jamie Oliver",
        "publisher": "SPBbook3",
        "ISBN": "3",
        "rating": "4.5",
        "paperback": "",
        "Summary": "Summary3",
        "imageURL": img3
    },
    {
        "title": "Inexpensive Family Meals",
        "author": "Simon Holst",
        "publisher": "SPBbook4",
        "ISBN": "4",
        "rating": "4",
        "paperback": "",
        "Summary": "Summary4",
        "imageURL": img4
    },
    {
        "title": "Paleo Slow Cooking",
        "author": "Chrissy Gower",
        "publisher": "SPBbook5",
        "ISBN": "5",
        "rating": "4.5",
        "paperback": "",
        "Summary": "Summary5",
        "imageURL": img5
    },
    {
        "title": "Cook Like an Italian",
        "author": "by Tobie Puttock",
        "publisher": "SPBbook6",
        "ISBN": "6",
        "rating": "4",
        "paperback": "",
        "Summary": "Summary6",
        "imageURL": img6
    },
    {
        "title": "Suneeta Vaswani",
        "author": "Geeta Devi",
        "publisher": "SPBbook",
        "ISBN": "7",
        "rating": "5",
        "paperback": "",
        "Summary": "Summary7",
        "imageURL": img7
    },
    {
        "title": "Jamie Does",
        "author": "by Jamie Oliver",
        "publisher": "SPBbook8",
        "ISBN": "8",
        "rating": "4",
        "paperback": "8",
        "Summary": "Summary8",
        "imageURL": img8
    },
    {
        "title": "Jamie’s italy",
        "author": "by Jamie Oliver",
        "publisher": "SPBbook9",
        "ISBN": "9",
        "rating": "5",
        "paperback": "9",
        "Summary": "Summary9",
        "imageURL": img9
    },
    {
        "title": "Vegetables Cookbook",
        "author": "by Matthew Biggs",
        "publisher": "SPBbook",
        "ISBN": "10",
        "rating": "3.5",
        "paperback": "",
        "Summary": "Summary10",
        "imageURL": img10
    }
];

    // getImage(url, key) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //         var reader = new FileReader();
    //         reader.onloadend = () => {
    //             _jsonExample[key].image = reader.result; 
    //             console.log('readed');
    //         }
    //         reader.readAsDataURL(xhr.response);
    //     };
    //     xhr.open('GET', url);
    //     xhr.responseType = 'blob';
    //     xhr.send();
    // }

    dataToLocal = async () => {
        await localStorage.setItem('items', JSON.stringify(this._jsonExample));
  }
}