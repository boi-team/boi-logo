import '../styles/main.boilogo.scss';

import Boilogo from './class.logo.js';

let canvas = $('#canvas')[0];
let $title = $('.logo_content .title');
let $subTitle = $('.logo_content .subtitle');

let boilogo = new Boilogo(canvas,{
    width: 180,
    height: 180
});

let duration = boilogo.baseParams.drawDuration;

setTimeout(function(){
    $title.removeClass('hide');
    $subTitle.removeClass('hide');
},duration);

boilogo.draw();
