//operators in JS 
//Operator ->"+,-,*,/,%,**" and operands are the thing on which operators are applied ex-> a+b =>(a,b) are operands and the '+' are operators
console.log('HI we are inside operator.js');
//Arithmatic Operator
let x=10,y=3;
console.log(x+y); 
console.log(x-y); 
console.log(x*y); 
console.log(x/y); 
console.log(x%y); 
console.log(x**y);  //exponent 

//Assignment Operator 
let up_add = x+=2;
console.log("Value of X is ",x)
console.log(up_add); //in this way for all the arithmatic operators 
// let expo_up = x/=2;
// console.log(expo_up);
console.log(x**=2);


// Relational Operator (Comaparison operator ) return a boolean value 
console.log(10>20); 
// (>,<,>=,<=)

//Logical Operator usage of && and || helps to return true/false or depends on value defined as operands
console.log(4 && 10);
console.log(5 || 12);
console.log((3>10) &&  (5<10));   

// 13,7,30,3.3333,1,1000,Value of X is 12,12,144,false,10,5,false 