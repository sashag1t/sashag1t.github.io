let a = 10;
let b = 40;
let c = a + b;
console.log("value of c", c);

// declaring or defining function

function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
}
function subtract(a, b) {
  let f = a - b;
  console.log("value of f", f);
  return f;
}
// calling of a function
let sum = add(a, b);
let sum2 = add(36, 63);
let d = 56;
let e = 87;
let sum3 = add(e, d);
console.log("value of sum", sum);
console.log("value of sum", sum3);
let balance = subtract(100, 35);
console.log("value of balance", balance);

function greet(name) {
  let newName = name.toUpperCase();
  let msg = "hello " + newName;
  console.log(msg);
  return newName;
}
let name = "sasha";
greet(name);
