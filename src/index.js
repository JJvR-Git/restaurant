import './style.css';

import loadIndex from './loadIndex.js';

import popHome from './popHome.js';
import popMenu from './popMenu.js';
import popContact from './popContact.js';

document.body.appendChild(loadIndex());

let tabCon = document.getElementById('tabCon');

tabCon.append(popHome());

let home = document.getElementById('home');
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');

home.addEventListener('click', () => {
    tabCon.innerHTML = '';
    tabCon.append(popHome());
});

menu.addEventListener('click', () => {
    tabCon.innerHTML = '';
    tabCon.append(popMenu());
});

contact.addEventListener('click', () => {
    tabCon.innerHTML = '';
    tabCon.append(popContact());
});
