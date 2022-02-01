'use strict';

const luku = +prompt('Anna luku: ');

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

if(isPrime(luku)) {
    alert('Luku on alkuluku');
}
else {
    alert('luku ei ole alkuluku');
}