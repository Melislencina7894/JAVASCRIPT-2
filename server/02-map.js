// Inmutabilidad vs mutabilidad

//La pregunta es la siguiente queremos generar un 
// nuevo array o una copia, aquí solo copia los elementos
// que cambiaron, no modifica el original. 

//Mutación: cambiamos el array original. 
// Inmutabilidad: clonamos y agregando cambios. Generamos
// un nuevo estado. 

// El MAP genera un nuevo array con la transformación, no cambia el original. Es inmutable, crea uno nuevo con el resultado
// de cada uno de los elementos. Además, mantiene el mismo length que el array original,
// te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.
const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);



// Ejercicio: En este desafío tienes un array de números, usando la función map debes retornar 
// todos los números del array multiplicados por dos.

// La solución debería tener un input y output como los siguientes:

// Input
function solution(array) {
	return array.map(num => num * 2);
}; 
console.log(solution([2, 4, 5, 6]));
