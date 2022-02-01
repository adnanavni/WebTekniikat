'use strict';

const alku = +prompt('Syötä aloitus vuosi');
const loppu = +prompt('Syötä lopetus vuosi');

for (let i = alku; i <= loppu; i++) {
  if (i % 4 == 0 && (i % 100 != 0 || i % 400 == 0)) {
    document.write(`<li> ${i} </li>`);
  }
}