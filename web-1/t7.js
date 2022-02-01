'use strict';

const saldo = prompt('Anna tilin saldo');
let korkoprosentti = prompt('Anna vuotuinen korkoprosentti');

korkoprosentti = korkoprosentti/100+1;

const koronmaara = saldo * korkoprosentti - saldo;
const kasvanutsaldo = saldo * korkoprosentti;

console.log('Koron määrä: ' + koronmaara.toFixed(2));

console.log('Kasvanut saldo: ' + kasvanutsaldo.toFixed(2));