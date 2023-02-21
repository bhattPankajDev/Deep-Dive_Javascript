// Questn=> Result of expression :
console.log("5" + 5)
//"55"

// Questn=> Result of expression :
console.log("5" - 5)
// 0

// Questn=> Result of expression :
console.log("5" * "5")
// 25

// Questn=> Result of expression : 
console.log(true + true)
// 2

// Questn=> Result of expression : 
console.log("true" + true)
// "truetrue"

// Questn=> PREDICT THE OUTPUT =>
console.log("10" + {X: 10,toString(){ return "hola";}, valueOf(){return 5;}})
// "105"
 

// corner cases around coercion

// ToString
console.log("" + 0)  //""+0->"0"

console.log(""+(-0)) //""+(-0)->"0"


// array cases
//empty array get converted to empty string
console.log([]+"Pankaj") // ""+"Pankaj"->Pankaj"

console.log(""+[]) // ""+""->""

console.log("" + {}) //"[object Object]"