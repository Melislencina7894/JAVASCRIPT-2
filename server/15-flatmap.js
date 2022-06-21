//alinea y transforma a medida que lo va a aplanando. 
//Como tengo un array de todos los atributos de mis usuarios. 
// flatMap() realiza un map y luego el flat
// flatMap() es un método que primero mapea cada elemento, y después aplana el resultado en un nuevo array.
// Es idéntico a hacer un map() seguido de un flat() de profundidad 1.
// Si necesitas hacer un flat de mayor profundidad, es mejor usar los métodos por separado, en lugar de usar flatMap().


const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

   //si quiero los atributos utilizo un map. Para alinear los array interno utilizo un flat. 
const rta = users.map((user) => user.attributes).flat();

//Hay una función que alinea y transforma. A medida que hace la iteración decimos que necesitamos
// los atributos y a medida que sabe que tiene que aplanarlo va haciendo el aplanamiento. 
const rta2 = users.flatMap((user) => user.attributes);

//ejecutamos la respuesta. 
console.log("map-flat", rta);

//ejecuto flatmap 
console.log("rta2", rta2);



//Desafío: cómo hacer un flatmap. Quiero un array de las fechas de inicio.  
// Este ej te devuelve las citas que tengas los usuarios dentro de sus calendarios como objetos. 
//Lo devuelve como un calendario. 
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

// flat y flatmap corren sobre array, sucede que tenemos un objeto, pero lo podemos
// convertir en un array. Con Object.keys obtengo array de atributo, pero necesito de valores
// por ende utilizo Object.values
// Flatmap utilizo un solo nivel, es una restricción. 
const rta3 = Object.values(calendars).flatMap(item => {
  // espero de cada uno de los elementos el startDate. Así obtengo fechas directas una debajo de la otra. 
    return item.map(date => date.startDate);
});
console.log(rta3);