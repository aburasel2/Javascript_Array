const bus = ['bus1', 'bus2', 'bus3', 'bus4', 'bus5'];
console.log('Original array:', bus);

bus.push('bus6','bus7'); // Adding new element at the end
console.log('After push:', bus);
bus.pop(); // Removing last element
console.log('After pop:', bus);

bus.unshift('bus0'); // Adding new element at the beginning
console.log('After unshift:', bus);
bus.shift();
console.log('After shift:', bus); // Removing first element

const  section1 = ['Rasel', 'Jisan', 'Arif', 'Sakib'];
const section2 = ['Kamal', 'Jamal', 'Nabil', 'Sabbir'];


    // const allstudents = section1.concat(section2);
    // console.log('Concatenated array:', allstudents);
const allstudents = section1.push(section2);
console.log('After push section2 into section1:', section1);

const myArray = [10, 20, 30, 40, 50];
console.log('Original myArray:', myArray);
const newArray = myArray.join();
console.log('Joined myArray:', newArray);


const anotherArray = [1, 2, 3, 4, 5,[6, 7, 8], 9, 10,[11, 12]];
const flatAnotherArray = anotherArray.flat(2);
console.log('Original anotherArray:', anotherArray);

const newAnotherArray = anotherArray.slice(1, 5);
const splicedAnotherArray = anotherArray.splice(1, 5);
console.log('Spliced anotherArray:', splicedAnotherArray);
console.log('Sliced anotherArray:', newAnotherArray);
const flatArray = splicedAnotherArray.flat(2);
console.log('Flattened anotherArray:', flatAnotherArray);



const fruits = [];
fruits[0] = 'Apple';
fruits[1]  = 'Banana';
fruits[2] = 'Mango';
fruits[3] = 'Orange';
fruits[4] = 'Pineapple';
const food = [];
food[0] = 'Rice';
food[1] = 'Dal';
food[2] = 'Vegetable';
food[3] = 'Meat';

const allItems = fruits.concat(food);
const allItemsSpread = [...fruits, ...food];
console.log('All items using spread operator (fruits + food):', allItemsSpread);
console.log('All items (fruits + food):', allItems);

console.log(Array.isArray('Rasel'));
console.log(Array.from('Rasel'));