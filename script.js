console.log('Welcome to Lesson 1 of JavaScript! Feel free to remove this line.')
var size = 5,
    i, j;

for (i = 0; i < size; i++) {
    let row = '';
    for (j = 0; j < size; j++) {
        row += '0   ';
    }
    console.log(row + "\n");
}
