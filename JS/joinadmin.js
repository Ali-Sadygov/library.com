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

const tbody = document.querySelector('#tbody');
var reqem = 2;

onValue(ref(db, '/join'), snapshot => {

  var neticee = Object.values(snapshot.val());
  for (let netice of neticee) {
    reqem++;
    const tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.setAttribute('class', 'fontserif');
    td2.setAttribute('class', 'fontserif');
    td3.setAttribute('class', 'fontserif');
    td1.innerHTML = reqem;
    td2.innerHTML = netice.nameval;
    td3.innerHTML = netice.emailval;
    tr.append(td1, td2, td3);
    tbody.append(tr);
  }
})