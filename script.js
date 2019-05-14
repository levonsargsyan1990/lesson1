let rows = null;
let cols = null;
const cube = [];
let intervalId = null;

function rowsHandler() {
  let rows = null;
  function get() {
    return rows;
  }
  function set(newRows) {
    rows = newRows;
  }
  return { get, set };
}

function colsHandler() {
  let columns = null;
  function get() {
    return columns;
  }
  function set(newColumns) {
    columns = newColumns;
  }
  return { get, set };
}

function initialize() {
  for (let i = 0; i < rows.get(); i++) {
    cube.push([]);
    for (let j = 0; j < cols.get(); j++) {
      cube[i].push(0);
    }
  }
}

function increment() {
  const randomRow = Math.floor(Math.random() * rows.get());
  const randomCol = Math.floor(Math.random() * cols.get());
  if (cube[randomRow][randomCol] === 1) {
    return increment();
  }
  cube[randomRow][randomCol] = 1;
}

function print() {
  const cubeSnapshot = [...cube];
  for (let i = 0; i < rows.get(); i++) {
    for (let j = 0; j < cols.get(); j++) {
      process.stdout.write(`${cubeSnapshot[i][j]}       `);
    }
    console.log("\n");
  }
  console.log("\n------------------------------\n");
}

function checkIfIsCompleted() {
  for (let i = 0; i < rows.get(); i++) {
    for (let j = 0; j < cols.get(); j++) {
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
    clearInterval(intervalId);
    return console.log("Congratulations! The process is complete");
  }
  return increment();
}

function start(rowNumber, colNumber, interval) {
  rows = rowsHandler();
  cols = colsHandler();
  rows.set(rowNumber);
  cols.set(colNumber);
  initialize();
  intervalId = setInterval(step, interval);
}

start(3, 8, 500);
