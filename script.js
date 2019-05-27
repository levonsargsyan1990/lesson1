// let empty = "";
// let filled = "";
// let rows = null;
// let cols = null;
// const cube = [];
// let counter = 0;
// let intervalId = null;

// function rowsHandler() {
//   let rows = null;
//   function get() {
//     return rows;
//   }
//   function set(newRows) {
//     rows = newRows;
//   }
//   return { get, set };
// }

// function colsHandler() {
//   let columns = null;
//   function get() {
//     return columns;
//   }
//   function set(newColumns) {
//     columns = newColumns;
//   }
//   return { get, set };
// }

// function initialize() {
//   for (let i = 0; i < rows.get(); i++) {
//     cube.push([]);
//     for (let j = 0; j < cols.get(); j++) {
//       cube[i].push(empty);
//     }
//   }
// }

// function increment() {
//   counter++;
//   const randomRow = Math.floor(Math.random() * rows.get());
//   const randomCol = Math.floor(Math.random() * cols.get());
//   if (cube[randomRow][randomCol] === filled) {
//     return increment();
//   }
//   cube[randomRow][randomCol] = filled;
// }

// function print() {
//   const cubeSnapshot = [...cube];
//   for (let i = 0; i < rows.get(); i++) {
//     for (let j = 0; j < cols.get(); j++) {
//       process.stdout.write(`${cubeSnapshot[i][j]}       `);
//     }
//     console.log("\n");
//   }
//   console.log("\n------------------------------\n");
// }

// function checkIfIsCompleted() {
//   for (let i = 0; i < rows.get(); i++) {
//     for (let j = 0; j < cols.get(); j++) {
//       if (cube[i][j] === empty) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function step() {
//   print();
//   if (checkIfIsCompleted()) {
//     clearInterval(intervalId);
//     return console.log(
//       `Congratulations! The process is completed in ${counter} steps`
//     );
//   }
//   return increment();
// }

// function start({
//   rowNumber,
//   colNumber,
//   interval,
//   emptyString = "0",
//   filledString = "1"
// }) {
//   empty = emptyString;
//   filled = filledString;
//   rows = rowsHandler();
//   cols = colsHandler();
//   rows.set(rowNumber);
//   cols.set(colNumber);
//   initialize();
//   intervalId = setInterval(step, interval);
// }

// start({
//   rowNumber: 12,
//   colNumber: 8,
//   interval: 200
// });

//custom methods


const _ = {
  customChunk: function(arr,count){
    let array1 = [];
    let array = [];
       for (i = 0; i < count; i++){
         array.push(arr[0]);
         arr.shift()
       }
       array1.push(array,arr)
       return array1
  },
  customCompact: function(arr){
    let array =[];  
    for(i = 0; i < arr.length; i++)
      if(arr[i]){
          array.push(arr[i])
      }
      return array
  },
  customConcat: function (...randomProperties){
    let arr = [];
    for(i = 0; i < randomProperties.length; i++ ){
      if(Array.isArray(randomProperties[i]) === true){
        for (j = 0; j < randomProperties[i].length; j++ ){
          arr.push(randomProperties[i][j])
        }
        
      } 
      else arr.push(randomProperties[i]) 
    }
    return arr
  },
  customDrop: function(arr,count = 1){
    for(i = 0; i < count; i++){
      arr.shift()
    }
    return arr
  },
  customDropRight: function (arr,count = 1){
    for(i = 0; i < count; i++){
      arr.pop()
    }
    return arr
  },
  customJoin: function(arr,sign){
    let str = '';
    for(i = 0; i < arr.length; i++){
      if(i === arr.length - 1){
        str += arr[i]
        return str
      } 
      str += arr[i] += sign
    }
    
  },
  customFill: function (arr,value,start,end){
    for(i = 0; i < end; i++){
      arr[i + start] = value 
    }
    return arr
  },
  cloneObject(obj) {
    if (null === obj || 
      "object" !== typeof obj || 
      Array.isArray(obj)) return obj;
    var copy = {};
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)){
           
          copy[key] = obj[key];

        } 
    }
    return copy;
},
cloneArray(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i ++){
    newArr.push(this.cloneObject(arr[i]))
  }
  return newArr
}
}
let x = [{a:{2:1},b:'a',c: 3},{a:{2:1},b:'a',c: 3},{a:{2:1},b:'a',c: 3}];
let b = {a:{2:1},b:'a',c: 3};
console.log(_.cloneArray(x) === x)

