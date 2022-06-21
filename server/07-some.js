//Some dice si alguno de los elementos cumple con la condicional. Al menos alguno... 
// Si la cumple true. 

//Evaluamos si al menos alguno es número par. Retornamos true. 
const numbers = [1, 2, 3, 4];

//suponemos que ninguno cumple con la condición. 
let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  //Si el elemento es %2, y su residuo es cero
  if (element % 2 === 0) {
    rta = true;
    //Si encuentra alguno cortamos. 
    break;
  }
}
console.log(rta);


                   //Colocamos la condicional
const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);



//Con objetos:  
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

//Hay al menos alguna orden entregada?
const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3);

//Some imprime true o false


const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

//Quiero saber si puedo agendar esta cita y que no se cruce con algunas de las que tengo arriba
const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

//Se debe instalar una librería i date-fns, es para hacer manipulación de fecha en JS. Overlapping
//Se importó la función
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
  //evaluo por cada una de las fechas para ver si se superpone. 
    return dates.some(date => {
        return areIntervalsOverlapping(
          //Se utilizan dos parámetros y la línea 97 es para evaluar con la cita que quiero ver
          //si puedo agendar. 
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));

//Si se superpone con al menos alguno es true, sino es false


// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array 
// al menos uno es un número par.

// La solución debería tener un input y output como los siguientes:




function solution(numbers) {
  // Tu código aquí 👈 

  return numbers.some (item => item % 2 ===0)
}; 
console.log (solution([1, 3, 5, 7, 10, 11])); 
console.log (solution([1, 3, 5])); 

