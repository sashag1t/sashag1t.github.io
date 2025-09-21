// Play button track 1
const playButton1 = document.querySelector("#play-button-1");
console.log(playButton1);
const Audio1 = document.querySelector("#track1");
console.log(Audio1);
playButton1.addEventListener("click", playAudio1());
function playAudio1(){
    Audio1.play();
}

// Play button track 2
const playButton2 = document.querySelector("#play-button-2");
console.log(playButton2);
const Audio2 = document.querySelector("#track2");
console.log(Audio2);
playButton2.addEventListener("click", playAudio2());
function playAudio2(){
    Audio2.play();
}

// Play button track 3
const playButton3 = document.querySelector("#play-button-3");
console.log(playButton3);
const Audio3 = document.querySelector("#track3");
console.log(Audio3);
playButton3.addEventListener("click", playAudio3());
function playAudio3(){
    Audio3.play();
}