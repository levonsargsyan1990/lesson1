// var size = 5,
//     i, j;

// for (i = 0; i < size; i++) {
//     let row = '';
//     for (j = 0; j < size; j++) {
//         row += '0   ';
//     }
//     console.log(row + "\n");
// }


function matrix(x,y,interval){
    return setTimeout(() => {
        for (i = 0; i < y; i++) {
            let row = '';
            for (j = 0; j < x; j++) {
                row += '0   ';
            }
            console.log(row + "\n")
          }
    }, interval);
}

matrix(4,4,3000)


