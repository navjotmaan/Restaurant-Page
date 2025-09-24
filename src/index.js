import {loadHome} from './home.js';
import {loadMenu} from './menu.js';
import { loadContact } from './contact.js';

import './styles.css';

loadHome();

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
});


const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {
    content.innerHTML = "";
    loadMenu();
});

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
});