'use strict';

const nopat = +prompt('Montako noppaa?');
let summa = 0;

for(let i = 0; i<=nopat; i++) {
    summa += Math.floor(Math.random() * 6) + 1
}

alert(nopat + ':n nopan silmälukujen summa: ' + summa);