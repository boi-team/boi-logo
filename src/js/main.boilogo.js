import '../styles/main.boilogo.scss';

import Boilogo from './class.logo.js';

let canvas = document.querySelector('#canvas');

let boilogo = new Boilogo(canvas,{
    width: 200,
    height: 200
});

// setInterval(function(){
// boilogo.draw();
// },);
boilogo.draw();
