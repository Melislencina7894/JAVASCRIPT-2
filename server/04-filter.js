//Filter, filtra un array en base a un condicional, los elementos que cumplan con esa condición 
// serán parte de ese nuevo array. Es inmutable. Crea un nuevo array. 
// Es un método que puede retornar con cero elementos, porque puede ser que ninguno cumpla 
// con la condición o retonar con todos los elementos en el caso que todos cumplan 
// con la condición. 

// O retornar todos los elementos, menos o cero, pero nunca más elementos de los que ya tiene. 

//Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:
// cero coincidencias
// todas coincidencias
// algunas coincidencias
// Pero nunca más coincidencias que el tamaño del array original.

const words = ["spray", "limit", "elite", "exuberant"];

// con for. Sólo los que cumplan con una condición formarán parte del array. 
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );
const rta = words.filter(item => item.length >= 6) //todas las líneas las reducimos en una sola. 
                                                   //guarda sin modificar el array original. 
// console.log('rta', rta);
// console.log('original', words );





const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];
                        //la condicional delivered es un booleano
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

//buscador de órdenes. Cuáles órdenes de compra tiene con ese cliente. Quary significa consulta. 
const search = (query) => {
  //retur con órdenes de compra que cumpla con la condición. 
    return orders.filter(item => {
      //buscamos por el customerName, la función includes dice si un string está incluido dentro de customerName
        return item.customerName.includes(query);
    })
}

// console.log(search('Nico'));
console.log(search('hsdjkfhdsj'));






// // con filter
// const rta = words.filter((element) => element.length >= 6);

// // en ambos casos, el resultado:
// > [ 'exuberant' ]
// .
// offtopic: el método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected truee

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected true

// console.log(pets.includes('at'));
// // expected false




// Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición 
// de tener 4 o más letras.

// La solución debería tener un input y output como los siguientes:

solution(['amor', 'sol', 'piedra', 'día']);

function solution(array) {
  // Tu código aquí 👈 
return array.filter ( item => item.length >= 4 )
}; 
console.log (solution(['amor', 'sol', 'piedra', 'día'])); 

