//Podemos tener con diferentes tipos de datos
//podemos tener array de array. 

//array con 3 elementos 
const letters = ['a','b','c'];

//de acuerdo al tamaño de los elementos, puedo iterar
// por la cantidad de elementos. 
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    //luego de recorrerlo puedo hacer por ej imprimirlo
    console.log('for',element);
}

//recorremos en una sóla línea. 
// tenemos una función que se ejecuta con cada uno 
// de los elementos. Luego escribimos lo que quiero
// con cada uno de los items. No es necesario ingresar 
// por cada elemento o posición, ya lo entrega por
// definición. 
letters.forEach(item => console.log('forEach', item))

//con runn code puedo ver el console.log 


//ejemplo sobre como renderizar una lista de tareas
// const app = document.getElementById('app');

// const tasks = [
//     { title: 'make dinner', done: false },
//     { title: 'sweep the floor', done: true },
//     { title: 'feed the kittens', done: true },
//     { title: 'buy groceries', done: false },
//     { title: 'take a bath', done: true },
// ];

// tasks.forEach(({ title, done }) => {
//     const element = `
//          <li>
//           	 <input 
//                      type='checkbox' 
//                      id='${title}' 
//                      name='${title}' 
//                      ${done && 'checked'} />
//                   <label for='${title}' >${title} </label>   
//          </li>`;
// app.insertAdjacentHTML('beforeend', element);});