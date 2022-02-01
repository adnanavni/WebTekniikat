'use strict';

let luku = +prompt('Anna positiivinen luku');
let neliojuuri = Math.sqrt(luku);

while(luku<=0){
    luku = +prompt('Anna positiivinen luku');
}

alert('Luvun ' + luku + ' neliöjuuri on ' + neliojuuri.toFixed(2));
