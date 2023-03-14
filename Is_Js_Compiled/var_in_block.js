function fun(){   //fun -> scope global
    var i=5;      //i scope fun
    while(i<10){   
        var x = i; // x scope -> fun scope
        if(x==9){  
            var endVal = x+1;  // endVal -> scope fun     concepr -> var will reach towards wrapping function scope outside block {}
        }
        i++;
    }
    console.log(x,endVal);
}
fun();    
// 9 10 

let i=1;
console.log(y);
while(i<5){
    var y = 10;
    i++;
}
console.log(y);
//undefined
//10

// this shows what happens when we have var in block scope

// let temp = 100;
// let temp = 200; //error during parsing phrase although valid in case of var 

let temp = 100;
temp=200;          // this is fine
console.log(temp)