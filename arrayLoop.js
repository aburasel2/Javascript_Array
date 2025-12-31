// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log("Initial array:", fruits);
// console.log("Array length:", fruits.length);



// forEach working
//foreach method
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// fruits.forEach(function(fruit, index){
//     console.log("The fruit at index " + index + " is " + fruit);
// })

// fruits.forEach(fruit => console.log(fruit));

// searching an item in an array

// console.log(fruits.includes("lemon"));

// searching an item and getting index
// console.log(fruits.indexOf("Apple"));

// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter(word => word.length > 6);
// console.log(result);


// const array = [-3,-2, -1, 0, 1, 2, 3, , 6, 10,11,12,1,15];

// const found = array.find((element) => element >10)

// console.log(found);


let users = [
    {id: 1, name: "John", age: 25, status: "active"},
    {id: 2, name: "jane", age: 30, status: "inactive"},
    {id: 3, name: "Bob", age: 22, status: "active"},
    {id: 4, name: "Alice", age: 28, status: "inactive"}
]

//filtering use

let activeUsers = users.filter(user => user.status === "active");
console.log(activeUsers);


let products = [
    {id: 1, name: "Laptop", price: 800, category: "Electronics"},
    {id: 2, name: "Shirt", price: 40, category: "Apparel"},
    {id: 3, name: "Phone", price: 600, category: "Electronics"},
    {id: 4, name: "Pants", price: 50, category: "Apparel"}

]

let expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);