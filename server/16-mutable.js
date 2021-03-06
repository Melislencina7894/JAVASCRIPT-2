

//El objetivo es pasar products a mi array de productos
const products = [
  { title: "Pizza", price: 121, id: "馃崟" },
  { title: "Burger", price: 121, id: "馃崝" },
  { title: "Hot cakes", price: 121, id: "馃" },
];

//trabajaremos con m茅todos mutables
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//buscar hamburguesa y busco por id. findIndex es el m茅todo que nos da la posici贸n, es inmutable no modifica el array orginal
const productIndex = products.findIndex(item => item.id === '馃崝');
//Si la encuentra entonces agregamos a myProducts. Con productIndex sino lo encuentra 
if (productIndex !== -1) {
    //utilizamos push que muta, agrega el elemento y cambia el array original. Una vez agregado productIndex se elimina con splice. 
    myProducts.push(products[productIndex]);
    //c贸mo hacemos para eliminar un elemento del array de productos. Una vez agregado se elimina. 
    //Tenemos que tener la ubicaci贸n del elemento. Splice modifica el array original es mutable
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update. Este ejercicio que sigue muestra como actualizar un array original, cambiar el precio de la dona y 
// agregar descripci贸n. 

const productsV2 = [
    { title: "Pizza", price: 121, id: "馃崟" },
    { title: "Burger", price: 121, id: "馃崝" },
    { title: "Hot cakes", price: 121, id: "馃" },
  ];
const update = {
    id: "馃",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    //ac谩 se realiza una fusi贸n 
    //decimos ve a la posici贸n
    ...productsV2[productIndexV2],
    //actualiza
    ...update.changes,
};
console.log(productsV2);