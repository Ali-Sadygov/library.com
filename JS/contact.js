import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, push, child, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyByoh7PDFvsc2YeBckU8Gwj6ae10ubpGRE",
    authDomain: "bookproject-773b0.firebaseapp.com",
    databaseURL: "https://bookproject-773b0-default-rtdb.firebaseio.com",
    projectId: "bookproject-773b0",
    storageBucket: "bookproject-773b0.appspot.com",
    messagingSenderId: "492661651476",
    appId: "1:492661651476:web:738cb3478475447cd24f01"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
/////////////////////////////////////
$("#contactBookBtn").on("click", function (e) {
    e.preventDefault();
    let name = $("#fullNameContact");
    let email = $("#emailContact");
    let address = $("#addressContact");
    let phone = $("#phoneContact");
    if (name.val().trim() === "" || email.val().trim() === "" || address.val().trim() === "" || phone.val().trim() === "") {
        $("#contactError").addClass("d-block");
    } else {
        let nameval = $(name).val();
        let emailval = $(email).val();
        let addressval = $(address).val();
        let phoneval = $(phone).val();
        const newpushh = push(child(ref(db, '/'), 'contact')).key
        set(ref(db, `/contact/${newpushh}`), {
            nameval,
            emailval,
            addressval,
            phoneval
        })
        $("#contactSuccess").addClass("d-block");
        $("#contactError").removeClass("d-block");
        setInterval(function () {
            window.location.reload();
        }, 1800)
    }
});