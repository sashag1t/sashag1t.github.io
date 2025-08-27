const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "day moi la topHeading";
// -->thay doi html tu javascript
// textContent show phan ben trong tag
// querySelector = chon cu the wothin document;
topHeading.style.color = "red";
// --> stye heading luon
const firstPara = document.querySelector("p");
console.log(firstPara);
console.log(firstPara.textContent);
// firstPara.innerHTML += "<span> New  element </span>" --> add content to html

const mySection = document.querySelector("section");
console.log(mySection);
let myNewContent = `
<h2> this is a image of a cat </h2>
<p> do you like it </p>`;
mySection.innerHTML += myNewContent;

const h2Heading = document.querySelector("#second-heading");
console.log(h2Heading);
console.log(h2Heading.textContent);

const allParas = document.querySelectorAll("p");
console.log(allParas);
// console.log(allParas.textContent); -> undefined vi allParas gom nhieu p = array, phai dung for nhu den duoi

for (let i = 0; i < allParas.length; i++) {
  console.log("Para", i + 1, ":", allParas[i].textContent);
  //   allParas[i].style.backgroundColor = "limegreen";
  allParas[i].classList.add("para-style");
}

const allAnother = document.querySelectorAll(".another");
console.log(allAnother);
for (let i = 0; i < allAnother.length; i++) {
  console.log(
    "Elements with class another",
    i + 1,
    ":",
    allAnother[i].textContent
  );
}

function toggleMe() {
  const myImg = document.querySelector("img");
  console.log(myImg);
  myImg.classList.toggle("round");
}

const myImg = document.querySelector("img");
console.log(myImg);
myImg.addEventListener("mouseenter", addMe);
myImg.addEventListener("mouseleave", removeMe);
myImg.addEventListener("click", handleClick);
function addMe() {
  myImg.classList.remove("round");
}
function removeMe() {
  myImg.classList.remove("round");
}

function handleClick() {
  console.log("did u just click me?");
}
