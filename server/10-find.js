//find me devuelve el objeto que cumple con el array. El que hice match con la condición. 
const numbers = [1,30,49,29,10,13];

//si no lo encuentra, rta queda con ese valor. 
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    //devuelve el elemento si fue encontrado
    rta = element;
    //si ya encontró el elemento ya no itera. 
    break;
  }
}
console.log('for', rta);
//al ponerle un elemento que no existe retorna un undefined 
const rta2 = numbers.find(item => item === 302323)
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

//find sirve para algo que no se repite. Debe retornar el objeto. 
const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);

//esto es para ver en qué posición del array está el elemento. 
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);