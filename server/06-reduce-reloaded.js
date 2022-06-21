
// cuántas veces hay un 1, 2, 3, esto me devuelve en un objeto como output. Y eso se considera un solo valor. 

const items = [1, 3, 2, 3];

//una vez retornado guardamos la respuesta
const rta = items.reduce((obj, item) => {
  //si dentro no existe, lo inicializo en 1, 
    if (!obj[item]) {
        obj[item] = 1;
    } else {
      // si existe obtenemos ese elemento en el 
      // contador que esté, en lo que esté más 1
        obj[item] = obj[item] + 1;
    }
    // retornamos el objeto. 
    return obj;
}, {});

console.log(rta);





const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];


//cuantos hay en niveles altos, medios o bajos. 
//

//guardamos la respuesta. 
const rta1 = data
// me interesa un array de los niveles, no los objetos
.map(item => item.level)
// ahora concateno 
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

//con el map: 6) ['low', 'medium', 'hight', 'low', 'medium', 'hight']

// con el reduce sumo cuantos niveles hay altos, medios y bajos. 