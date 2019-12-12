function $(id) {
    return document.getElementById(id);
}
$('smallBox').onmouseover=function(){
    $('mask').style.display='block';
    $('bigBox').style.display='block';
};

$('smallBox').onmouseout =function() {
    $('mask').style.display='none';
    $('bigBox').style.display='none';
};

$('smallBox').onmousemove = function (event){
var evebt = event||window.event;
var pageX = event.pageX || event.clienX + document.documentElement.scrollLeft;
var pageX = event.pageY || event.clienY + document.documentElement.scrollLeft;
var boxX = pageX - $('box').offsetHeight;
var boxY = pageY - $('box').offsetTop;
var maskX = boxX - $('mask').offsetWidth/2;
var maskY = boxY - $('mask').offsetHeight/2;
if (maskX <0) {
    maskX = 0;
}
if(maskX > $('smallBox').offsetWidth - $('mask').offsetWidth) {
maskX > $('smallBox').offsetWidth - $('mask').offsetWidth
}
if (maskY <0) {
    maskY = 0;
}
if (maskY >$ ('smallBOx').offsetHeight - $('mask').offsetHeight) {
    maskY >$ ('smallBOx').offsetHeight - $('mask').offsetHeight;
}
$('mask').style.left = maskX + 'px';
$('mask').style.top = maskY + 'px';
var bigImgToMove = $('bigImg').offsetWidth - ('bigBOx').offsetWidth;
var maskToMove = $('smallBOx').offsetWidth - ('mask').offsetWidth;
var rate = bigImgToMove / maskToMove;
$('bigImg').style.left = -rate * maskX + 'px';
$('bigImg').style.top = -rate * maskY + 'px';
 };
