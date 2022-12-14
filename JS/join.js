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
//////////////////////////////////////

var modal = document.getElementById("myModal");
var div2 = document.querySelector('#div2')

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function () {
    div2.removeAttribute('class', 'gizlet');
    modal.style.display = "block";
    modalImg.append(div2);
}

var span = document.getElementsByClassName("close")[0];

window.onclick = function (e) {
    if (e.target.className === 'modal') {
        modal.style.display = "none";
    }
}
const sign = document.querySelector('.sign');
const error = document.querySelector('.admin-error');
const succes = document.querySelector('.admin-success');

sign.addEventListener('click', function () {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');

    if (name.value == '' || email.value == '') {
        error.removeAttribute('id');
        succes.setAttribute('id', 'succesgizlet');
    } else if (!email.value.includes('@')) {
        error.removeAttribute('id');
        succes.setAttribute('id', 'succesgizlet');
    } else if (email.value.includes("@") && email.value.includes(".")) {
        let nameval = name.value;
        let emailval = email.value;
        const newpush = push(child(ref(db, '/'), 'join')).key
        set(ref(db, `/join/${newpush}`), {
            nameval,
            emailval
        })
        succes.removeAttribute('id');
        error.setAttribute('id', 'errorgizlet');
        email.value = '';
        name.value = '';
        setInterval(function () {
            window.location.reload();
        }, 1500)
    } else {
        error.removeAttribute('id');
        succes.setAttribute('id', 'succesgizlet');
    }
})
