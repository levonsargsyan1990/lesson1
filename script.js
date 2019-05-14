console.log(
  "Welcome to Lesson 1 of JavaScript! Feel free to remove this line."
);
var matrix = create2DArrayAndInit(4, 12, "S");
var arrRand = create2DInitialArray(4, 12);
// var replay = setInterval(
//   setValueInRandomCellAndPrintArray,
//   1000,
//   matrix,
//   4,
//   12,
//   "M"
// );
var replay = setInterval(
  setValueInRandomCellAndPrintArrayUpdated,
  1000,
  matrix,
  4,
  12,
  "M"
);

function setValueInRandomCellAndPrintArray(array, rowSize, columnSize, value) {
  if (!allElementIs(array, rowSize, columnSize, value)) {
    var i = Math.floor(Math.random() * rowSize);
    var j = Math.floor(Math.random() * columnSize);

    array[i][j] = value;
    printArray(array, rowSize, columnSize);
  } else {
    alert("Congratulations! The process is complete");
    clearInterval(replay);
  }
}

function create2DArrayAndInit(rowSize, columnSize, initValue) {
  var arr = [];
  for (var i = 0; i < rowSize; i++) {
    arr[i] = [];
  }
  for (var i = 0; i < rowSize; i++) {
    for (var j = 0; j < columnSize; j++) {
      arr[i][j] = initValue;
    }
  }
  return arr;
}

function printArray(arr, rowSize, columnSize) {
  for (var i = 0; i < rowSize; i++) {
    var strRow = "";
    for (var j = 0; j < columnSize; j++) {
      strRow = strRow + " " + arr[i][j];
    }
    console.log(strRow);
  }
  console.log("\n");
}

function allElementIs(array, rowSize, columnSize, value) {
  for (var i = 0; i < rowSize; i++) {
    for (var j = 0; j < columnSize; j++) {
      if (array[i][j] != value) {
        return false;
      }
    }
  }
  return true;
}

function setValueInRandomCellAndPrintArrayUpdated(
  array,
  rowSize,
  columnSize,
  value
) {
  console.log("Count: " + (rowSize * columnSize - arrRand.length));
  if (arrRand.length != 0) {
    var coord = Math.floor(Math.random() * arrRand.length);
    array[arrRand[coord][0]][arrRand[coord][1]] = value;
    arrRand.splice(coord, 1);
    printArray(array, rowSize, columnSize);
  } else {
    alert("Congratulations! The process is complete");
    clearInterval(replay);
  }
}

function create2DInitialArray(rowSize, columnSize) {
  var arr = [];
  var m = 0;
  for (var i = 0; i < rowSize; i++) {
    for (var j = 0; j < columnSize; j++) {
      arr[m] = [i, j];
      m++;
    }
  }
  return arr;
}
