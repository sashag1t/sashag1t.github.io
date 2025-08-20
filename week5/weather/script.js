function checkWeather() {
  const temp = document.querySelector("#myTemp");
  const body = document.querySelector("body");
  console.log(temp);
  const t = temp.value;
  console.log(t);
  if (t > 40) {
    console.log("it's super hot");
    body.style.backgroundColor = "red";
  } else if (t <= 40 && t > 30) {
    console.log("it's sunny nd warm");
  } else if (t <= 18 && t > 8) {
    console.log("it's quite col");
  } else if (t < 7) {
    console.log("it's freezing");
  }
}
