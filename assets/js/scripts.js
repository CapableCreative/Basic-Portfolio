// This scripts.js file controls the following:
//  1 - Contact Modal on Homepage
//  2 - Portfolio Lightbox on Portfolio Page
//

var modal = document.getElementById('contactModalContent');
// connect the button click action with the modal style change
var btn = document.getElementById('contactModal');
// define close button
var close = document.getElementsByClassName('modalClose')[0];
// define button onclick event
btn.onclick = function() {
    modal.style.display = "block";
}
// close modal onclick
close.onclick = function() {
    modal.style.display = "none";
}
// this modal covers the screen, but if styles were set otherwise, this would allow the
// modal to close if the user clicked outside the modal.
window.onclick - function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function portfolioItem() {
    var portPic = document.getElementById('fullsizeportitem');
    portPic.style.display = "flex";
    portPic.style.opacity = "1.0";
}