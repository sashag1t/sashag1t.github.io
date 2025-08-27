// console.log("hello");
// // const name = "sasha";
// // console.log("hallo", name);
// // let myName = prompt("what is your name?");
// // console.log("hello", myName);
// // console.log("hello", myName);
// let a = 10;
// const b = 20;
// console.log(a);
// a = 30;
// console.log(a);
// console.log(b);
// myName = "sasah";
// console.log("hello", myName);

// string variables
const myName = "sasha";
const mySirName = "Nguyen";
console.log(myName, mySirName);

// Number variables

let a = 10;
let b = 123;
let c = a + b;
console.log(c);
const id = 974;
const city = "Mel";
const uni = "rmit";

// object
const myStudentRecord = {
  name: "sasha",
  id: 974,
  city: "mel",
};
console.log(myStudentRecord.city);

const myAssignmentRecod = {
  id: 974,
  a1Score: 78,
  a2Score: 85,
  a3Score: 70,
};
const total =
  myAssignmentRecod.a1Score +
  myAssignmentRecod.a2Score +
  myAssignmentRecod.a3Score;
console.log(total);

// boolean check true or false condition
const itIsEvening = true;
const itItRainig = false;

// back ticks `` for multiple line strings
const myAddress = `rmit uni
la trobe
vic is ${id}'s address`;
const myDetails = `hello I am ${id}, from ${myAddress}`;
console.log(myAddress);
console.log(myDetails);

const student1 = `simple`;
const student2 = `elec`;
const student3 = `bit`;
const student4 = `boomble`;
console.log("hello", student1);
console.log("hello", student2);
console.log("hello", student3);
console.log("hello", student4);

let student = ["simple", "elec", "perfecto", "boomble"];
console.log("hello", student[0]);
console.log("hello", student[1]);
console.log("hello", student[2]);
console.log("hello", student[3]);

console.log("array size", student.length);
for (let i = 0; i < student.length; i++) {
  console.log("value of i", i);
  console.log("hello", student[i]);
}
// let ids = [12, 13, 14, 15];
// console.log(ids[2]);

// let score = 90;
// if (score > 80) {
//   console.log("you gor HD");
//   console.log("letsgo");
// } else {
//   console.log("you don't get HD");
// }

// let marks = "88";
// let marks2 = 88;
// console.log(marks === marks2);

// let score1 = 98;
// if (score1 > 80) {
//   console.log("you got HD");
//   console.log("letsgo");
// } else if (score1 <= 80 && score1 > 70) {
//   console.log("you get DI");
// } else if (score1 < 50) {
//   console.log("sorry you failed");
// }
let shoppingCart = 
[
  {name: "t shirt", price: 20},
  {name: "jean", price: 50},
  {name: "pant", price: 30},
  {name: "short", price: 40},
];
console.log("shopping array size", shoppingCart.length);
let cartTotal = 0;
for (let i = 0; i < shoppingCart.length; i++) 
  {
    cartTotal = cartTotal + shoppingCart[i].price;
    console.log("my purchased item is", shoppingCart[i].name);
    console.log("its price is", shoppingCart[i].price);
  console.log("value of i", i);
  console.log("total o far", cartTotal);
}
if (cartTotal>200)
{
  console.log("ypu get discount");
} else {
  console.log("buy more to get discount")
}
