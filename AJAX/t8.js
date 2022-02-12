'use strict';
const lomake = document.querySelector('form');

lomake.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const hakusana = document.querySelector('input[name=q]');

    fetch('https://api.tvmaze.com/search/shows?q=' + hakusana)
        .then(function (vastaus) {
            return vastaus.json();
        }).then(function (sarjat) {
            console.log(sarjat);
        })
});