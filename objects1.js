const Object1 ={
    a : "foo",
    b: 42,
    c: {
        d: "bar",
        e: true,
        // arrays
        f: [1, 2, 3, 4]
       
    }
}
// console.log(Object1);
// console.log(Object1.a);
// console.log(Object1.b);
// console.log(Object1.c.d);
// console.log(Object1.c.e);
// console.log(Object1.c.f);
// console.log(Object1.c.f[1]);


// const a = "cho";
// const b = true;
// const c = 9000;
// const d = [5, 6, 7, 8];
// const e ={x: "hello", y: "world"};

// const Object2 = {a, b, c, d, e};
// console.log(Object2);


// const ob1 = {a: 1, b: 2};
// const ob2 = {c: 4, d: 5};
// const ob3 = {e: 6, f: 7};

// const retrnTarget = Object.assign(target, source);
// console.log(retrnTarget);
// const commbineObjects = Object.assign({}, ob1,ob2,ob3)
// console.log(commbineObjects);

// const commbineObjects = {...ob1, ...ob2, ...ob3};
// console.log(commbineObjects);


// const user = [
//     {
//     name: "Alice",
//     age: 30,
//     email: "alice@gmail.com",
//     },
//     {
//     name: "Alice",
//     age: 30,
//     email: "alice@gmail.com",
//     },
//     {
//     name: "Alice",
//     age: 30,
//     email: "alice@gmail.com",
//     },
//     {
//     name: "Alice",
//     age: 30,
//     email: "alice@gmail.com",
//     },
// ]

// console.log(user[1].email);
// console.log(user[3].name);
// console.log(Object.keys(Object1));
// console.log(Object.values(Object1));
// console.log(Object.entries(Object1));


// const o = new Object();
// o.name = "John";
// o.age = 25;
// o.city = "New York";

// console.log(o);

const course = {
    title: "JavaScript Basics",
    duration: "4 weeks",
    courseInstructor: "Muhammad Rasel",
    level : "Beginner",
    company: "Programming Hero"
}

//object destructuring
// console.log(course);
// console.log(course.courseInstructor);


// const {courseInstructor, title, duration, level, company} = course;
// console.log(courseInstructor);
// console.log(title);
// console.log(duration);
// console.log(level);
// console.log(company);

const {courseInstructor: instructor} = course;
console.log(instructor);