const readline =require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question('Number of rows ? ',(row)=>{
   

    for(i=0;i<row;i++){
        pattern=""
       for(j=0;j<=i;j++){
         pattern +="* "
       }
       console.log(pattern);
    }
      
      rl.close();
      
 });

//sample output

/*
Number of rows ? 5
* 
* * 
* * * 
* * * * 
* * * * * 
*/
