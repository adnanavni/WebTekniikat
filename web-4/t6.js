'use strict';

let luku;
const luvut = [];

while (luku !== 0) {
    luku = +prompt('Syötä luku');
    luvut.push(luku);
}

luvut.pop();

luvut.sort((a,b) => a-b);

let mediaani = 0;

if(luvut.length % 2 === 0) {
    const ekaKeskimmainen = Math.floor((luvut.length - 1) / 2);
    const tokaKeskimmainen = ekaKeskimmainen + 1;
    mediaani = (luvut[ekaKeskimmainen] + luvut [tokaKeskimmainen]) / 2; 
} else {
    const keskimmainenIndeksi = (luvut.length - 1) / 2;
    const mediaani = luvut[keskimmainenIndeksi];
}

alert(mediaani);