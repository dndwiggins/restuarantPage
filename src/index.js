import './style.css';


import loadHome from './home';

import loadMenu from './menu'

import loadAbout from './about';


loadHome()


function remove() {

    const content = document.getElementById('content')

    while (content.firstChild) {
        content.firstChild.remove()
    }

}


const homebt = document.querySelector('#homebt')

homebt.addEventListener('click', function () {

    remove()

    loadHome()

});

const menubt = document.querySelector('#menubt')

menubt.addEventListener('click', function () {

    remove()

    loadMenu()

});

const aboutbt = document.querySelector('#aboutbt')

aboutbt.addEventListener('click', function () {

    remove()

    loadAbout()

});




