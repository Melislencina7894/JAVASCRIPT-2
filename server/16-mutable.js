

//El objetivo es pasar products a mi array de productos
const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

//trabajaremos con métodos mutables
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//buscar hamburguesa y busco por id. findIndex es el método que nos da la posición, es inmutable no modifica el array orginal
const productIndex = products.findIndex(item => item.id === '🍔');
//Si la encuentra entonces agregamos a myProducts. Con productIndex sino lo encuentra 
if (productIndex !== -1) {
    //utilizamos push que muta, agrega el elemento y cambia el array original. Una vez agregado productIndex se elimina con splice. 
    myProducts.push(products[productIndex]);
    //cómo hacemos para eliminar un elemento del array de productos. Una vez agregado se elimina. 
    //Tenemos que tener la ubicación del elemento. Splice modifica el array original es mutable
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update. Este ejercicio que sigue muestra como actualizar un array original, cambiar el precio de la dona y 
// agregar descripción. 

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    //acá se realiza una fusión 
    //decimos ve a la posición
    ...productsV2[productIndexV2],
    //actualiza
    ...update.changes,
};
console.log(productsV2);