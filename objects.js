
const mySymbol = Symbol('mySymbol');

const person = {
    name: "John",
    "Full Name": "John Doe",
   "age" : 30,
   "mail": "john@example.com",
    gender: "Male",
    city: "New York",
    country: "USA",
    [mySymbol]: "This is a symbol property"
}

person.age = 40;
person.mail = "Rasel@gmail.com";
person.city = "Los Angeles";

console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person["age"]);
console.log(person.mail);
console.log(person.mySymbol);
console.log(person[mySymbol]);