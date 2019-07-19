var counter;
function run(width, length, time, symbol1, symbol2) {
    counter = 0;
    let keys = [];
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < width; j++) {
            keys.push("" + i + j);
        }
    }

    shuffle(keys);
    var currentKeys = [];

    var intervalId = setInterval(interval, time);
    function interval() {
        printCube(currentKeys, width, length, symbol1, symbol2);
        if (keys.length == 0) {
            console.log("Congratulations! The process is complete: " + counter);
            clearInterval(intervalId);
        }
        currentKeys.push(keys.pop());
    }
}

function printCube(indexes = [], width, length, symbol1, symbol2) {
    let line = "";

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < width; j++) {
            if (indexes.indexOf("" + i + j) !== -1) {
                line += symbol2;
                counter++;
            } else {
                line += symbol1;
            }
        }
        line += "\n";
    }
    console.log(line);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function start() {
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    var time = parseInt(document.getElementById("time").value);
    var symbol1 = document.getElementById("symbol1").value;
    var symbol2 = document.getElementById("symbol2").value;

    width = width ? width : 5;
    height = height ? height : 5;
    time = time ? time : 1000;
    symbol1 = symbol1 ? symbol1 : "0";
    symbol2 = symbol2 ? symbol2 : "1";

    run(width, height, time, symbol1, symbol2);
}
