'use strict';

function parilliset(numero) {
    let taulukko = [];
    for (let i = 0; i < numero.length; i++) {
      if (numero[i] % 2 === 0) {
        taulukko.push(numero[i]);
      }
    }
    return taulukko;
  }

const luvut = [+prompt('Anna eka luku'), +prompt('Anna toka luku'), +prompt('Anna kolmas luku')];

alert(parilliset(luvut));