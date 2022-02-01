'use strict';

const lkm = prompt('Syötä ehdokkaiden lukumäärä');
const aanestajat = prompt('Syötä äänestäjien lukumäärä');

const aanet = [];

for(let i = 0; i < lkm; i++) {
    aanet[i] = 0;

}
for(let i = 0; i < aanestajat; i++) {
    const aani = +prompt('Syötä ehdokkaan numero');
    if(aani !== 0 && aani >= lkm)
    aanet[aani-1]++;
}

alert(aanet);

const suurin = Math.max(...aanet);
const voittaja = aanet.indexOf(suurin) + 1;

alert(voittaja)