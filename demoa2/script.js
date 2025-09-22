const trackList = [
    { name: "Hes", link: "demoa2/p-hase_Dry-Down-feat-Ben-Snaath.mp3"},
    { name: "Dry Down", link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Dry-Down-feat-Ben-Snaath.mp3"},
    {name: "Leapt", link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Leapt.mp3"},
    {name: "Water Feature", link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3"}
];

const myAudio = document.querySelector("#my-audio");

// // Play button track 1
const playButton1 = document.querySelector("#play-button-1");
console.log(playButton1);
playButton1.addEventListener("click", function chooseAudio() {
    playAudio(0);
});

// Play button track 2
const playButton2 = document.querySelector("#play-button-2");
console.log(playButton2);
playButton2.addEventListener("click", function chooseAudio() {
    playAudio(1);
});

// Play button track 3
const playButton3 = document.querySelector("#play-button-3");
console.log(playButton3);
playButton3.addEventListener("click", function chooseAudio() {
    playAudio(2);
});

// Play button track 4
const playButton4 = document.querySelector("#play-button-4");
console.log(playButton4);
playButton4.addEventListener("click", function chooseAudio() {
    playAudio(3);
});

function playAudio(no) {
    myAudio.src = trackList.src;
    console.log(myAudio.src);
    myAudio.load();
    myAudio.play();
}
