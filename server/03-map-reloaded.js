//Tenemos un array con objetos, cada objeto tiene un atributo. 
// Podemos seleccionar para transformar. Escogemos los elementos para trabajar. ç
// 


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
];
//para comprobar para el array de números. 
console.log("original", orders);
//pasamos de un array de objetos a un array de números. Importante para seleccionar datos. 
const rta = orders.map((item) => item.total);
//esta es la respuest. 
console.log("rta", rta);

//Ahora si queremos agregar un tax, es impuesto. 
// const rta2 = orders.map((item) => {
       //agrego un atributo de impuesto a cada elemento. Itero c/u
//   item.tax = 0.19;
       //aquí se crea un error una modificación al objeto que está en memoria. Nopasa en 
       // string o nùmero primitivo. Copia la referencia en memoria map. Abajo solución
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

//Surge un problema en rta2 porque al imprimir el array el original también
// se sumó. 



//Solución para no cambiar el estado original. En vez de retornar y hacer la 
// modificación en el objeto que es el que guarda la referencia en memoria,
// hay que asegurarse de generar un nuevo objeto.  
const rta3 = orders.map((item) => {
  return {
    //aquí clonamos los atributos del objeto sin la referencia en memoria
    // lo copiamos en un nuevo objeto. Ecmascrip6. Asi se trabaja con map. 
    // El original no terminando mutando.  
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);


// Ejercicio 
// Tienes un array de productos con los siguientes atributos:

// name
// price
// stock
// Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes"
//  será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

// La solución debería tener un input y output como los siguientes:


const array = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
];

// const solutionTaxes = array.map(item => ({ ...item, 'taxes': Math.round( item.price * .1985)  }));

const solutionTaxes2 = ArmaArrayConTax(array);

console.log(solutionTaxes2);

// function ArmaArrayConTax(array) {
//      return array;
// }; 

function ArmaArrayConTax(array) {
  return array.map(item =>  (
    {
      ...item,
      //el math es para propiedades matemáticas
      'taxes': Math.round(item.price * 0.1985),
      'PAIS': item.price * 0.3
    }
  ));
};


// return array.map(item => ({ ...item, 'taxes': Math.trunc( item.price * .19 ) }))

