console.log("Hello JavaScript");

//let
let age = 20;
console.log(age);
age = 21;
console.log(age);
//const
const name = "Tuong";
console.log(name);
//var
var city = "Ha Noi";
//typeof
const username = "Tuong";
const score = 9;
const isStudent = true;
console.log(typeof username);
console.log(typeof score);
console.log(typeof isStudent);
//Template Literal
const name = "Tuong";
const age = 20;
console.log(`My name is ${name} and I am ${age}`);
//Toán tử so sánh 
// ==
console.log(5 == "5"); // true
// === 
console.log(5 === "5"); // false

// array
const students = ["An", "Binh", "Cuong"];
console.log(students);

//push
students.push("Dung");
console.log(students);

//pop
students.pop();
console.log(students);

//includes
console.log(
    students.includes("An")
); //true
//forEach
students.forEach((student) => {
    console.log(student);
});
//Object
const student = {
    id: 1,
    name: "Tuong",
    score: 9
};

//truy cập
console.log(student.name);
//sửa
student.score = 10;
//thêm thuộc tính
student.email = "abc@gmail.com";
//in object
console.log(student);

//function thường
function greet() {
    console.log("Hello");
}
greet();
// có tham số
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Tuong");
//return
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));

//arrow function
const sum = (a, b) => {
    return a + b;
};

