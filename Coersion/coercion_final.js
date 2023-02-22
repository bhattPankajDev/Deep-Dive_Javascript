// coercion examples

let obj ={x:200000}
let num=20
console.log(`This is my car no ${num}`)   //During printing we manyatimes uses coercion also  HERE num 
//  will be converted ToString (abstract operatn)  
//output->This is my car no 20
console.log(`I am right now scored ${obj}`)  //here also obj was conveted to Primitive preferred type STRING
//output -> I am right now scored [objectObject]

console.log(1 < 2 < 3) //1 < 2 executes first then this result < 3 so effectively=>
// 1 < 2 =>true then true < 3 toNumber will come into picture okay then it will be 1 < 3 =>true (again coercion played here) 

console.log(3 > 2 > 1) // 3 > 2 will evalute first then we will have the result here result is true then true > 1 so again 
// coercion will come into picture 1 > 1 so =>false 

// We have explicit coercion also 

console.log(Boolean(""))   //false
console.log(String(1020))  //"1020"
console.log(Number("0xb")) //11 

// NaN examples
console.log("NaN examples")
// NaN equality is not possible in JS but what if there is a use case we need to check whether a number that we get is NaN OR NOT
// For that we have isNaN
let x=NaN 
console.log(isNaN(x)) //true
console.log(isNaN("Pankaj"))  //true

//isNaN=>converts the arg into ToNumber so that's why in case of input string i.e is passed it got converted to NaN then it 
// returned true

// so here if we pass some non NaN value still we will be getting result as true

// so a better function would be 
// Number.isNaN() // this checks for type first if type mismatch is there then it fails upfront
console.log(Number.isNaN("Pankaj")) //false   // no coercion takes place

console.log(Number.isNaN(x)) //true

// custom_code for isNaN or Number.isNaN to be more specific
console.log("Implementing cc code for Number.isNaN")
if(typeof(x)==="number" && x!==x){
    console.log("Yes it is NaN => true") 
}


