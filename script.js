let mySound = new Audio("boom.wav"); let play = 1; let points = 0;

function createGrid() {
  let box = document.querySelector(".flex");
  for (i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("onclick", "step(this)");
    box.appendChild(square);
  }
  randomBomb();
}

function randomBomb() {
  let squares = document.querySelectorAll(".square");
  for (i = 0; i < 20; i++) {
    let casual = Math.floor(Math.random() * 100);
    squares[casual].classList.add("bomb");
  }
}

function step(e) {
  if (e.innerText == "" && !e.classList.contains("bomb") && play > 0) {
    e.classList.add("good");
    points++;
    document.querySelector("#points").innerText = points;
  } else if (e.innerText == "" && e.classList.contains("bomb") && play > 0) {
    e.classList.add("exploded");
    mySound.play();
    play = 0;
    document.querySelector("#gameover").style.opacity = "100%";
  }
}

createGrid();