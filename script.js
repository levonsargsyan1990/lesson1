let empty = "";
let filled = "";
let rows = null;
let cols = null;
const cube = [];
let counter = 0;
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
      cube[i].push(empty);
    }
  }
}

function increment() {
  counter++;
  const randomRow = Math.floor(Math.random() * rows.get());
  const randomCol = Math.floor(Math.random() * cols.get());
  if (cube[randomRow][randomCol] === filled) {
    return increment();
  }
  cube[randomRow][randomCol] = filled;
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
      if (cube[i][j] === empty) {
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
    return console.log(
      `Congratulations! The process is completed in ${counter} steps`
    );
  }
  return increment();
}

function start({
  rowNumber,
  colNumber,
  interval,
  emptyString = "0",
  filledString = "1"
}) {
  empty = emptyString;
  filled = filledString;
  rows = rowsHandler();
  cols = colsHandler();
  rows.set(rowNumber);
  cols.set(colNumber);
  initialize();
  intervalId = setInterval(step, interval);
}

start({
  rowNumber: 12,
  colNumber: 8,
  interval: 200
});
