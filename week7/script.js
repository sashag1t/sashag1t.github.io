// access the audio
const audio1 = document.querySelector("#audio1");
console.log(audio1);

// access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

// add a event listener sp that whenever sb click on the button, the audio is played
// playButton.addEventListener("click", playAudio);
// // use function because playAudio meeds to be defined
// function playAudio() {
//   audio1.play();
// }

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
function pauseAudio() {
  audio1.pause();
}
pauseButton.addEventListener("click", pauseAudio);

// pop sound effect
// access the pop sound
const popSound = document.querySelector("#pop-sound");
console.log(popSound);
// add evenListener to play the sound when sb clicks
function popAudio() {
  popSound.play();
}
popSound.addEventListener("click", popAudio);

// access video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);
playButton.addEventListener("click", playVideo);
// // similar to playAudio but change it to video
function playVideo() {
  myVideo.play();
}
