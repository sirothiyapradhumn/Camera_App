//connect to database
let db;
let openRequest = indexedDB.open('myDatabase');

openRequest.addEventListener('success', ()=>{
    console.log('db connected');
    db = openRequest.result;
});

openRequest.addEventListener('upgradeneeded', ()=>{
    console.log('db upgraded OR initialised db');
    db = openRequest.result;

    db.createObjectStore('video', {keyPath:"id"});
    db.createObjectStore('image', {keyPath:"id"});
});

openRequest.addEventListener('success', ()=>{
    console.log('db ');
    db = openRequest.result;
});