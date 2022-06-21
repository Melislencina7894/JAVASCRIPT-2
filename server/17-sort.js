//método mutable. 

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
// ordena como entero, peso, no como en la tabla ASCCI, está ordenado de mayor a menor. 
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
              //lenguaje donde corre la configuración de ideoma. 
words.sort((a,b) => a.localeCompare(b));
console.log(words);

// ¿Por qué a - b o b - a?
// La función que le enviamos a sort es la función compareFn donde:

// Si compareFn(a, b) devuelve un valor mayor que 0, ordena b antes a.
// Si compareFn(a, b) devuelve un valor menor que 0, ordena a antes b.
// Si compareFn(a, b) devuelve 0 a y b se consideran iguales.


//Orden con objetos. 
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  //Sólo se pone el atributo al que se quiere ordenar. 
  orders.sort((a,b) => b.total - a.total);
  console.log(orders);