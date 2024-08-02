import mohito from './images/mohito.png';
import oldFashioned from './images/oldFashioned.png';

const loadMenu = () => {
    const content = document.getElementById('content');


    const box1 = document.createElement('div');
    const box2 = document.createElement('div');


    const mohitoIcon = new Image();
    mohitoIcon.src = mohito;

    const ofIcon = new Image();
    ofIcon.src = oldFashioned;


    const mHead = document.createElement('h1');
    mHead.innerHTML = 'Mohito';

    const oHead = document.createElement('h1');
    oHead.innerHTML = 'OldFash';


    box1.appendChild(mohitoIcon);
    box1.appendChild(mHead);

    box2.appendChild(ofIcon);
    box2.appendChild(oHead);


    content.appendChild(box1);
    content.appendChild(box2);
};

export default loadMenu;