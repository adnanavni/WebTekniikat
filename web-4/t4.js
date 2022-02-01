'use strict';

let luku;
const luvut = [];

while (luku !== 0) {
    luku = +prompt('Syötä luku');
    luvut.push(luku);
}

luvut.pop();

alert(luvut.sort().reverse());