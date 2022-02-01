'use strict';

function itseisarvo(luku) {
    if(luku<0) {
        luku *= -1
    }
    return luku;
} 

const laskettava = +prompt('Anna luku');

alert('Luvun itseisarvo: ' + itseisarvo(laskettava));