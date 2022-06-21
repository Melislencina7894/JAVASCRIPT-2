//Reduce un array a un sólo valor. No retorna array. 
// Para promedio de todas las ventas del mes por ej. 


const totals = [1,2,3,4];

//acumulador
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    //para sumar los valores a iterar. 
    sum = sum + element;
}
console.log(sum);
                        //primer atributo es el acumulador, luego el item que iteramos
                        //Luego ejecutamos la función. 
                        //sum debe tener un estado inicial por eso cero. 
                        //Recapitulando primer parámetro => y luego su 2 parámetro estado inicial
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);


//ejercicio: 
// Tienes un array de números y debes retornar la suma de todos los valores en él.

// La solución debería tener un input y output como los siguientes:

solution([1, 1, 1]);
solution([2, 4, 8]);

function solution (numbers) {
    return numbers.reduce ((sum,element) => sum + element, 0) 
}; 
console.log (solution([1, 1, 1])); 
console.log (solution([2, 4, 8]));