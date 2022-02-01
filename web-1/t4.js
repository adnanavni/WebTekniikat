'use strict';
const kanta = +prompt('Anna kannan pituus');
const korkeus = +prompt('Anna korkeuden pituus');

const piiri = (kanta * 2) + (korkeus * 2);
const pinta = kanta * korkeus;

console.log('Piiri: ' + piiri);
console.log('Pinta-ala: ' + pinta);