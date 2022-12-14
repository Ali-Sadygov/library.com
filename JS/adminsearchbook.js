import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"
import {getDatabase, ref,
  set,
  push,
  child,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyByoh7PDFvsc2YeBckU8Gwj6ae10ubpGRE",
  authDomain: "bookproject-773b0.firebaseapp.com",
  databaseURL: "https://bookproject-773b0-default-rtdb.firebaseio.com",
  projectId: "bookproject-773b0",
  storageBucket: "bookproject-773b0.appspot.com",
  messagingSenderId: "492661651476",
  appId: "1:492661651476:web:738cb3478475447cd24f01",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

$(".searchbutton").on("click", function () {

  var search = $(".inputsearch").val().trim();
  var bookname = $(".bookname");
  var authorname = $(".authorname");
  var describtion = $(".describtion");

  var imgurl = $(".bookimg");

  $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${search}`,
     
  }).then(function (result) {
      $(bookname). val(result.items[0].volumeInfo.title);
      $(authorname).val(result.items[0].volumeInfo.authors[0]);
      $(describtion).val(result.items[0].volumeInfo.description); 
      $(imgurl).val(result.items[0].volumeInfo.imageLinks.smallThumbnail);

  })

  $(".inputsearch").val("");

})




