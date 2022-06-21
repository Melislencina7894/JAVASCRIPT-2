//es un método para fusionar array. Es inmutable. 

const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

//Al tener referencia en memoria. Utilizo ... splitp operation sirve para array y objetos. 
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}


//Con concat no tiene referencia en memoria, además respeta si envias array o string no lo separa caracter por caracter. 
//Genera un nuevo array.  
const rta = elements.concat(othersElements);

//esto es para clonar los elementos de un array y otro. 
const rta2 = [...elements, ...othersElements];

//esto es para clonar elements, pero la característica es que quiero unir la palabra ramdom
//sin los .... la palabra random se une como string 
// const rta3 = [...elements, 'random'];

//si agrego ... la palabra ramdom se divide en cada uno de los elementos. 
const rta3 = [...elements, ...'random'];

//el array se duplica 
console.log('for', newArray);

console.log('concat', rta);

console.log('...', rta2);

console.log('rta3', rta3); //acá se une como parte del array todo el string


//Que pasa si quiero cambiar el array original, cambio el array original. Los ... es para concatenar los 
//otros elementos y agregarlos al final del primer array. 
elements.push(...othersElements);
console.log('elements', elements);