//Join sirve para unificar un array. 
const elements = ["Fire", "Air", "Water"];

//este let es el string unificado. 
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

//join no puse -- hasta el final 
const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);


//título de un artículo
const title = 'Curso de manipulación de arrays';

//generar la url del artículo. Lo que tiene en común los strings es que puedo utilizar 
// el spilt es que por algún patrón quiero volver de una cadena a un array. 
// cuál va  a ser ese patrón que identifico para volverlo un array. En este caso los espacios
//generan un array. Cada espacio genera un array. 
//
// Entonces en un array tenemos cada palabrita. El ssplit es cada espacio que hay dentro del títulO. Separa de acuerdo a un patrón. 
//Cada espacio genera un array. Una vez que está como array, el Join une, finalmente lo paso a minúscula. 
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);


// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de 
// URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), 
// por ejemplo: Curso de arrays => curso-de-arrays

// La solución debería tener un input y output como los siguientes:

// solution("La forma de correr Python");
// solution("La API para nunca parar de aprender");
// solution("Curso de arrays");



 function solution(title) {
   
    //el método divide las cadenas en sub cadenas usando un divisor
    return title.split(' ')
    //join significa unir 
                 .join('-')
                 .toLowerCase();
 }; 
 
 let text1 = "La forma de correr Python"
 let text2= "La API para nunca parar de aprender"
 let text3 = "Curso de arrays"
 
 const resultado1 =  solution(text1)
 const resultado2 =  solution(text2)
 const resultado3 =  solution(text3)
 
 
 console.log( resultado1)
 console.log( resultado2)
 console.log( resultado3)
 
  
 let textejemplo = "La forma de correr Python"
 
 console.log(textejemplo.split(' '));
