const rows = 5;
const cols = 5;
const cube = [];
let interval = null;

function initialize() {
  for (let i = 0; i < rows; i++) {
    cube.push([]);
    for (let j = 0; j < cols; j++) {
      cube[i].push(0);
    }
  }
}

function increment() {
  const randomRow = Math.floor(Math.random() * rows);
  const randomCol = Math.floor(Math.random() * cols);
  if (cube[randomRow][randomCol] === 1) {
    return increment();
  }
  cube[randomRow][randomCol] = 1;
}

function print() {
  const cubeSnapshot = [...cube];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      process.stdout.write(`${cubeSnapshot[i][j]}       `);
    }
    console.log("\n");
  }
  console.log("\n------------------------------\n");
}

function checkIfIsCompleted() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (cube[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

function step() {
  print();
  if (checkIfIsCompleted()) {
    clearInterval(interval);
    return console.log("Congratulations! The process is complete");
  }
  return increment();
}

function start() {
  initialize();
  interval = setInterval(step, 1000);
}

start();
