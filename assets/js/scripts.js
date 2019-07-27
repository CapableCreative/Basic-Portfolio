// This scripts.js file controls the following:
//  1 - Contact Modal
//  2 - Portfolio Lightbox on Portfolio Page
//

// 1 - CONTACT MODAL 
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

// 2 - PORTFOLIO LIGHTBOX 
//      This script isn't very well written, but it gets the job done. I would really love to know 1. how to link the images in a navigational loop (<- ->), 2. how I can 
//      simplify the repetative code below, as well as any other standard "lightbox" behaviours I wasn't able to impleemnt. - SLF
function portfolioItem0() {
    var portPic = document.getElementsByClassName('lightbox0') [0];
    portPic.style.display = "flex";
    portPic.style.opacity = "1";
    portPic.style.transition = "all 2s";
}

function portfolioItem1() {
    var portPic = document.getElementsByClassName('lightbox1') [0];
    portPic.style.display = "flex";
    portPic.style.opacity = "1";
    portPic.style.transition = "all 2s";
}

function portfolioItem2() {
    var portPic = document.getElementsByClassName('lightbox2') [0];
    portPic.style.display = "flex";
    portPic.style.opacity = "1";
    portPic.style.transition = "all 2s";
}

function portfolioItem3() {
    var portPic = document.getElementsByClassName('lightbox3') [0];
    portPic.style.display = "flex";
    portPic.style.opacity = "1";
    portPic.style.transition = "all 2s";
}

function portfolioItem4() {
    var portPic = document.getElementsByClassName('lightbox4') [0];
    portPic.style.display = "flex";
    portPic.style.opacity = "1";
    portPic.style.transition = "all 2s";
}

function portfolioItem5() {
    var portPic = document.getElementsByClassName('lightbox5') [0];
    portPic.style.display = "flex";
    portPic.style.opacity = "1";
    portPic.style.transition = "all 2s";
}

function closelight0() {
    var closeit = document.getElementsByClassName('closelightbox')[0];
    closeit.style.display = "none";
}
function closelight1() {
    var closeit = document.getElementsByClassName('closelightbox')[1];
    closeit.style.display = "none";
}
function closelight2() {
    var closeit = document.getElementsByClassName('closelightbox')[2];
    closeit.style.display = "none";
}
function closelight3() {
    var closeit = document.getElementsByClassName('closelightbox')[3];
    closeit.style.display = "none";
}
function closelight4() {
    var closeit = document.getElementsByClassName('closelightbox')[4];
    closeit.style.display = "none";
}
function closelight5() {
    var closeit = document.getElementsByClassName('closelightbox')[5];
    closeit.style.display = "none";
}




