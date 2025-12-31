let car ={
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    features: [
        "AC",
        "Sunroof",
        "Bluetooth",
        "CC"
    ]
}

console.log(car.brand);
console.log(car.features[1]);


// json object

let car1 ={
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "features": [
        "AC",
        "Sunroof",  
        "Bluetooth",
        "CC"
    ]
}

// console.log(car1.model);

// how to convert object to json 
// let jsonCar = JSON.stringify(car1);
// console.log(jsonCar);
// console.log(typeof jsonCar);

// console.log( typeof car)

let jsonData = JSON.stringify(car1);
console.log( typeof jsonData);

let convertedJsonData = JSON.parse(jsonData);
console.log(convertedJsonData);