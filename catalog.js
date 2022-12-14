var isAnimating = false;
function scrollLeftAnimate(elem, unit) {
    if (!elem || isAnimating) {
        //if element not found / if animating, do not execute slide
        return;
    }
    var time = 300; // animation duration in MS, the smaller the faster.
    var from = elem.scrollLeft; // to continue the frame posistion
    var aframe =
        10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
    isAnimating = true; //if animating prevent double trigger animation

    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            elem.scrollLeft = ((step * unit) + from);
            if (step === 1) {
                clearInterval(timer);
                isAnimating = false;
            }
        }, aframe);
}

function initDealCarrousel(dealCarrouselID) {
    var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
    var cardOutterWidth;
    var maxCarrouselScroll;
    function updateUpaCarrouselInfo() {
        cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
        maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
                cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
            .clientWidth;
    }
    document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info
            if (target.scrollLeft > 0) {
                scrollLeftAnimate(target, -cardOutterWidth * 2);
            }
        }
    );
    document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
        function () {
            updateUpaCarrouselInfo(); //in case window resized, will get new info 
            if (target.scrollLeft < maxCarrouselScroll) {
                scrollLeftAnimate(target, cardOutterWidth * 2);
            }
        }
    );
}
// Initiate the container with ID
initDealCarrousel('va_container'); //carrousel ID

/*----------------------------------------------------------------*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
    child,
    onValue,
    get
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
const api = 'https://www.googleapis.com/books/v1/volumes?q='
set(ref(db, 'api'), {
    api
})

onValue(ref(db, '/api/api'), snapshot=> {
    var netice = snapshot.val();
    $.ajax({
        url: netice+"HTMl"
    }).then(result => {
        for(var i = 0;i<2;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"Elxan"
    }).then(result => {
        for(var i = 2;i<3;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"Ali ve Nino"
    }).then(result => {
        for(var i = 5;i<7;i++){
        var card = document.querySelector('.card'+3);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"Martin Iden"
    }).then(result => {
        for(var i = 3;i<7;i++){
        var card = document.querySelector('.card'+4);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"A"
    }).then(result => {
        for(var i = 5;i<20;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"This"
    }).then(result => {
        for(var i = 10;i<20;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"Albert Einstation"
    }).then(result => {
        for(var i = 9;i<10;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[0].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[0].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[0].volumeInfo.authors[0]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"Albert"
    }).then(result => {
        for(var i = 10;i<11;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[1].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[1].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[1].volumeInfo.authors[1]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
    $.ajax({
        url: netice+"Nobel"
    }).then(result => {
        for(var i = 11;i<23;i++){
        var card = document.querySelector('.card'+i);
        const a = document.createElement('a');
        $(a).attr('class','link-plain');
        const img = document.createElement('img');
        $(img).attr('class', "va-thumbnail cataloq-img");
        $(img).attr('src', result.items[i-11].volumeInfo.imageLinks.smallThumbnail);
        const h3 = document.createElement('h3');
        $(h3).attr('class','va-title bookname ');
        $(h3).html(result.items[i-11].volumeInfo.title)
        const h4 = document.createElement('h4');
        $(h4).attr('class','va-start-from bookmuellif');
        $(h4).html(result.items[i-11].volumeInfo.authors[i-11]);
        const read = document.createElement('button');
        $(read).html("Read-more");
        $(read).attr('class', "read-more");
        $(a).append(img, h3, h4,read);
        $(card).append(a);
        }
    })
})