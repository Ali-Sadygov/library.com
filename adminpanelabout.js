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

$(".about-btn").on("click", function () {
    const bookTitle = $(".book-title").val().trim();
    const bookDescription = $(".book-descripton").val().trim();
    const bookImgUrl = $(".book-img-url").val().trim();
    $(".book-title").attr('id', "yasil");
    $(".book-descripton").attr('id', "yasil");
    $(".book-img-url").attr('id', "yasil");
    setInterval(function () {
        $(".book-title").removeAttr('id', "yasil");
        $(".book-descripton").removeAttr('id', "yasil");
        $(".book-img-url").removeAttr('id', "yasil");
    }, 3000)
    const r = ref(db, "/about");
    set(r, {

        'book': bookTitle,
        'description': bookDescription,
        'imgurl': bookImgUrl,

    });

});
onValue(ref(db, "/about"), (snapshot) => {
    $(".h2-about").html(snapshot.val().book);

    $(".about-desc").html(snapshot.val().description);
    $(".aboutimg").attr("src", snapshot.val().imgurl);
});