'use strict';
const nimi = prompt('Mikä on nimesi?');

const random = Math.floor(Math.random() * 3);

switch(random) {

  case 0:
  console.log(nimi + ', olet Rohkelikko!');
  break;

  case 1 :
  console.log(nimi + ', olet Luihuinen!');
  break;

  case 2 :
  console.log(nimi + ', olet Puuskupuh!');
  break;

  case 3 :
  console.log(nimi + ', olet Korpinkynsi!');
  break;
}
