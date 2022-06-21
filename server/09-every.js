//Todos deben cumplir con la condición. 



const numbers = [1,30,39,29,10,13];


let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
      //Si hay un elemento que sea mayor a 40 ya sería false. 
        rta = false
    }
}
console.log('for', rta);


const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);




//Ejercicio evaluar que todos sean menores de 15 años. 
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];


const teamsMenores15 = SonTodosMenores15(team);

console.log (teamsMenores15); 


function SonTodosMenores15(team)
{
   return team.map(item => item.age)
            .every(age => age <=15);
}





function solution(numbers) {
  // Tu código aquí 👈 
 return numbers.every((number) => number % 2 === 0);
}; 

console.log (solution([2, 4, 6, 8, 10])); 
console.log (solution([1, 3, 5, 7, 10, 11]));
console.log (solution([1, 3, 5])); 

