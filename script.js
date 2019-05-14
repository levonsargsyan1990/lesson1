const rows = 5;
const cols = 5;
const cube = [];

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
    console.log("ALREADY INCREMENTED");
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

function step() {
  print();
  increment();
}

function start() {
  initialize();
  setInterval(step, 1000);
}

start();
