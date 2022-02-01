'use strict';
const kuha = +prompt('Kuinka pitkä kuha on (cm)? ');
const mitta = 37-kuha;

if(kuha<37) {
    console.log('Kuha on alimittainen, laske se takaisin järveen.');
    console.log('Kuhan pitää vielä kasvaa ' + mitta + ' senttimetriä');    
}
else {
    console.log('Kuha on laillinen');
}