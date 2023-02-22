
// NegativeZero
// Relevance is when we -0 it is used when we want to show some vector quantity

let x = -0;
console.log(x === 0);  //true
console.log(x.toString()) //0
//how we can check when we have -0 or +0 because if there is no use then it will be n use to have "-" minus symbol here
// Object.is(SameValue) works like strict equality but the difference in how NaN's and -0/+0 are treated here 
console.log(Object.is(x, -0)); // true
console.log(Object.is(x, 0)); // false

console.log(Math.sign("Pankaj")) //NaN and if we pass NaN to the functn the result is again NaN
console.log(Math.sign(null)) //0
console.log(Math.sign(-3));  //-1
console.log(Math.sign(2));   //1
console.log(Math.sign(-0));  //-0 
console.log(Math.sign(0));   //0

console.log(x < 0); //false
console.log(-3 < 3)//true


/*
    Question ->write a custom function that can give us sign of a number properly ? expected -> -1, 1
*/