let btn = document.getElementById("btn");
let intervalElement = document.getElementById("interval");
let zeitH1 = document.getElementById("zeit");
let timesH1 = document.getElementById("times");

btn.addEventListener("click", onButtonClick);
intervalElement.addEventListener("change", () => {
  interval = intervalElement.value;
  console.log(interval);
});

let interval = 10;

let secondsRemaining = 0;
let times = 0;

function onButtonClick() {
  document.getElementById("interval-container").remove();
  zeitH1.style = "visibility: visible";
  timesH1.style = "visibility: visible";
  secondsRemaining = interval * 1;
  tick();
  setInterval(tick, 1000);
}

function tick() {
  zeitH1.innerText = `${secondsRemaining} sec`;
  if (secondsRemaining > 0) {
    secondsRemaining -= 1;
  } else {
    secondsRemaining = interval * 1;
    times += 1;
    timesH1.innerText = `Times: ${times}`;
    let sound = new Audio("sound.wav");
    sound.play();
  }
}
