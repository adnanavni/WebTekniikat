'use strict';
const luvut = [];
let luku;

for(let i = 0; i<5; i++) {
    luku = +prompt('Anna luku: ');
    luvut.push(luku);
}

alert(luvut.reverse());