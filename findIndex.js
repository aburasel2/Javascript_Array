const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
const index = array.findIndex(isLargeNumber);

console.log(index); // Output: 3

const findlast = array.findLast(ar => ar>50);
console.log(findlast);

const fruit = ["apple", "banana", "grape", "kiwi"];
const upperCaseFruit = fruit.map(f => f.toUpperCase());
console.log(upperCaseFruit); 