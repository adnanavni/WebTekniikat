'use strict';
const ekaluku = +prompt('Anna eka luku');
const tokaluku = +prompt('Anna toka luku');
const kolmasluku = +prompt('Anna kolmas luku');

const summa = ekaluku + tokaluku + kolmasluku;
const tulo = ekaluku * tokaluku * kolmasluku;
const keskiarvo = (ekaluku * tokaluku * kolmasluku)/3;

console.log(summa);
console.log(tulo);
console.log(keskiarvo);