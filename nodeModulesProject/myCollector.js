// commonjs standard vs Es6  standard

const m1 = require("./myFirst");
const m2 = require("./mySecond");

m1.myMultiplier(5) 
    //console.log(m1.myMultiplier(5) );   
m2.myMultiplier(5)    
     //console.log(m2.myMultiplier(5) );
     
const fs = require ("fs")    // core module   
//console.log(fs);

 var text = "The value of 14 when passed through the myMultiplier function is " + m1.myMultiplier(14) 

fs.writeFile('results.txt', text, function(err, file){
     if(err) throw err;
     console.log(err);
     console.log("file created");
} )

var text2 = "\n The value of 14 when passed through the myMultiplier function is " + m2.myMultiplier(14) 

fs.appendFile('results.txt', text2, function(err, file){
     if(err) throw err;
     //console.log(err);
     console.log("file created");
} )



