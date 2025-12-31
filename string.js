let name = "  Hello World  ";
console.log(name);
console.log(name.trim());

let massage = "JavaScript is awesome!";
let ms = `this is a new massage: ${massage.toUpperCase()}`;
console.log(ms);

// lenght check

let text = "Hello, World!";
console.log(text.length);

// 
console.log(text.charAt(1));
console.log(text[1])


for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i));
}


let toUpperCaseText = text.toUpperCase();
console.log(toUpperCaseText);

let toLowerCaseText = text.toLowerCase();
console.log(toLowerCaseText);

// search

let position = text.indexOf("l");
console.log(position); // Output: 2

let lastIndex = text.lastIndexOf("l");


// slice 

let part = text.slice (0,5);
console.log(part);

let substrPart  = text.substring(5,11);
console.log(substrPart);