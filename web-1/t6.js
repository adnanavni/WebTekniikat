'use strict';
const leiviskat = prompt('Syötä leiviskät:');
const naulat = prompt('Syötä naulat:');
const luodit = prompt('Syötä luodit:');

const luoti = 13.3;
const naula = 32 * luoti;
const leiviska = 20 * naula;

const massa = leiviskat * leiviska + naulat * naula + luodit * luoti;
console.log(massa);

const kilot = Math.floor(massa/1000);
console.log(kilot);

const grammat = massa % 1000;
console.log(grammat);

console.log('Massa nykymittojen mukaan: \n' + kilot + 'kilogrammaa ja ' + grammat.toFixed(2) + ' grammaa');