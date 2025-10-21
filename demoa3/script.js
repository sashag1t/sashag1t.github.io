const videoWrap = document.querySelector(".video-wrap");
console.log(videoWrap);

const myVideo = document.querySelector("#video");
console.log(myVideo);

myVideo.pause();

function scroll() {
    const distance = window.scrollY - videoWrap.offsetTop;
    const total = videoWrap.clientHeight - window.innerHeight;

    let percentage = distance / total;
    percentage = Math.max(0, percentage);
    percentage = Math.min(percentage, 1);

    if( myVideo.duration > 0) {
        myVideo.currentTime = myVideo.duration * percentage;
    }
} 

window.addEventListener("scroll", scroll);
