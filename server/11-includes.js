const pets = ['cat', 'dog', 'bat'];

//El elemento está o no dentro del array 
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    //el elemento es igual al que tratamos de encontrar 
    if (element === 'dog') {
        includeInArray = true;
        //una vez encontrado ya estaría ese elemento dentro del array 
        break;
    }
}

//método para hacerlo en una línea. ¿Hay un elemento que incluya dog?
//Include no recibe un arrow function. Include sirve para string y para array. 
const rta = pets.includes('dog')

console.log('for', includeInArray);
console.log('includes', rta);




// Tu desafío es crear un buscador usando funciones como filter y includes,
// vas a tener array con palabras e tienes que retornar un array con sola las que cumplan 
// con la condición de tener el parámetro de búsqueda.

// La solución debería tener un input y output como los siguientes:

// solution(["ana", "santi", "nico", "anastasia"], "an");
// solution(["ana", "santi", "nico", "anastasia"], "xyz");


// Output
// ["ana", "santi", "anastasia"]
// []



function solution(words , query) {
    
    const result = words.filter(word => {
        return word.includes(query);
    });

    return result;
};

const result22 = solution(["ana", "santi", "nico", "anastasia"], "an");

console.log(result22);