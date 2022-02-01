'use strict';

const nopat = +prompt('Montako noppaa heitetään?');
const toivottutulos = +prompt('Kiinnostava summa?');
let osumat = 0;
let heitsumma = 0;

function heitot (heitsumma) {
    for(let i = 0; i<nopat; i++) {
        heitsumma += Math.floor(Math.random() * 6) + 1;
    }
    return heitsumma;
}

for(let i = 0; i<10000; i++) {
    let osu = heitot(heitsumma);
    if(toivottutulos === osu){
        osumat++;
    }
}

alert('Todennäköisyys: ' + (osumat*100/1000) + ' %');