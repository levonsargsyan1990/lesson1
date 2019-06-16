console.log('Welcome to Lesson 1 of JavaScript! Feel free to remove this line.')

var a = 0;

for (var i = 0; i < 5; i++) {
   
    for(var j = 0; j<5;j++){
        if(i==3 & j==3){a=1}
        else {
            a=0;
        }
        process.stdout.write('  ' + a) ;}
        

        process.stdout.write('\n');

    
    
    
}