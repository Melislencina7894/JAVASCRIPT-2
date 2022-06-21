//son array con array dentro, hay que ver como hacerlos únicos. Flat lo que hace
// es volverlos en una sola línea. 

//por eje una matriz tiene 2 dimensiones. Esto representa un array de array. 
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

//Todos estos for es para aplanar 
//esto es para decir que el elemento esté en un nuevo array. 
const newArray = [];
//recorremos la matriz
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    //acá se itera el array que está en el 2 niivel
    for (let j = 0; j < array.length; j++) {
        //queremos obtener el elemento de la matriz, columna a, fila b 
        const element = matriz[i][j];
        //ese elemento lo pongo en el nuevo array
        newArray.push(element);
    }
}



//acá digo quiero aplanar mi matriz. Tenemos que decir hasta que nivel para que pueda aplanar sin
//división los niveles. 
const rta = matriz.flat(3);

console.log('for', newArray);

//acá está la respuesta. 
console.log('flat', rta);


// La funcionalidad de Flat con recursión
// Se busca recursivamente en cada elemento hasta que ya no se encuentre otra lista y 
// se van uniendo los elementos encontrados con Cat.

// const matriz = [
//     [1,2,3],
//     [4,5,6, [1,2, [1,2]]],
//     [7,8,9]
// ];

// function profundidad(list) {
//     let newList = [];
//     if (typeof list != "object") return [list];
//     list.forEach(element => {
//         newList = newList.concat(profundidad(element));
//     });
//     return newList;
// }

// const newArray = profundidad(matriz);

// console.log(newArray);