'use strict';

//MENU MOBILE
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
    }
    else    {
        navMain.classList.add('main-nav--closed');
    }
});

//MENU FIXED

function menuPosition() {
    var hHeader;
    var clientY;
    var hMenu;
    var header = document.querySelector('.header');
    var nav = document.querySelector('.main-nav');

    hHeader = header.offsetHeight;
    hMenu = nav.offsetHeight;
    clientY = pageYOffset;
    if (hHeader <= clientY) {
        header.style.marginBottom = hMenu + "px";
        nav.style.position = "fixed";
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";
        nav.style.top = "0px";
    } else {
        nav.style.position = "relative";
        header.style.marginBottom = "0";
        nav.style.boxShadow = "none";
    }
}

window.addEventListener('resize', function(event) {
    menuPosition();
});

window.addEventListener('scroll', function(event) {
    menuPosition();
});


// REVIEWS

var reviews = document.querySelectorAll('.reviews__item');
var i = 0;
var j = 0;
var a = reviews.length;
var nextSlide = document.querySelector('.reviews__btn--next');
var prevSlide = document.querySelector('.reviews__btn--prev');

nextSlide.addEventListener('click', function() {

    for (i = 0; i < a; i++) {
        if (reviews[i].classList.contains('reviews__item--active')) {
            break;
        }
    }

    reviews[i].classList.remove('reviews__item--active');

    if (i == a-1) {
        i = 0;
        reviews[i].classList.add('reviews__item--active');
    }
    else {
        reviews[i + 1].classList.add('reviews__item--active');
    }
});

prevSlide.addEventListener('click', function() {


    for (i = 0; i < a; i++) {
        if (reviews[i].classList.contains('reviews__item--active')) {
            break;
        }
    }

    reviews[i].classList.remove('reviews__item--active');

    if (i == 0) {
        i = a-1;
        reviews[i].classList.add('reviews__item--active');
    }
    else {
        reviews[i - 1].classList.add('reviews__item--active');
    }
});

// MAP

var map1 = document.querySelector('.contact__map');

function initialize () {
    var centerMap = new google.maps.LatLng(59.9247389, 30.3834078);
    var optionMap = {
        zoom: 17,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    var mymap = new google.maps.Map(map1, optionMap);

    var marker = new google.maps.Marker({
        position: centerMap,
        map: mymap
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
map1.classList.add('map-google');

