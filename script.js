const semaforo = document.getElementById("semaforo");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => {
  if (colorIndex < 2) {
    ++colorIndex;
  } else {
    colorIndex = 0;
  }
}

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopAutomatic = () => {
  clearInterval (intervalId)
}

const turnOn = {
  red: () => (semaforo.src = "./assets/vermelho.png"),
  yellow: () => (semaforo.src = "./assets/amarelo.png"),
  green: () => (semaforo.src = "./assets/verde.png"),
  automatic: () => intervalId = setInterval(changeColor, 1000),
};

buttons.addEventListener("click", trafficLight);

// minuto 7:00
