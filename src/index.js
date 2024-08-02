import './style.css';


import loadHome from './home';

import loadMenu from './menu'



function remove() {

    const content = document.getElementById('content')

    while (content.firstChild) {
        content.firstChild.remove()
    }

}


const btns = document.querySelectorAll('#bt')

btns.forEach((bt) => {

    bt.addEventListener('click', function () {


        remove();

    });

});


