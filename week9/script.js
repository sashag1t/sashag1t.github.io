const clickButton = document.querySelector("#click-button");
console.log(clickButton);

const myDuck = document.querySelector("#my-duck");
console.log(myDuck);

clickButton.addEventListener("click", moveDuck);

let counter = 0;

function moveDuck(){
    if (counter === 0) {
        myDuck.style.translate = "20px 40px";
        
        counter = 1;
    } else {
        myDuck.style.translate = "0px 0px";
        counter = 0;
    }

}