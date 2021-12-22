var hoverDistort = new hoverEffect({
    parent: document.querySelector('.wrapper'),
    intensity: 0.5,
    image1: 'images/Antigone-Text.png',
    image2: 'images/Antigone-Quote.png',
    displacementImage: 'images/4.png'
});


$(document).ready(function() {

    $('.wrapper').hover(         
    function () {
    anime.timeline({loop: false})
    .add({
    targets: '.hero-title .letter',
    translateX: [80,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 100 + 40 * i
    })
    },

    function () {
    anime.timeline({loop: false})
    .add({
    targets: '.hero-title .letter',
    translateX: [0,-80],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 800,
    delay: (el, i) => 40 * i
    });         
    }
    );
        
});