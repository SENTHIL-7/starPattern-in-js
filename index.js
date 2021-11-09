// const globe = require("./one");
// globe.func();

// const glo = require('./ser');
// glo.sen();

const readline =require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question('no row ?',(row)=>{
   

    for(i=0;i<row;i++){
        pattern=""
       for(j=0;j<=i;j++){
         pattern +="* "
       }
       console.log(pattern);
    }
      
      rl.close();
      
 });

 

