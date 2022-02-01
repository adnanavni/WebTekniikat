'use strict'; 

const luku = +prompt('Anna luku');
let kertoma = 1;

for(let i=1; i<=luku; i++) {
    kertoma*=i;
}

alert('Luvun kertoma on ' + kertoma);
