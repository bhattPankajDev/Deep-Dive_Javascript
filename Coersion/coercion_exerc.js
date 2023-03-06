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
console.log("" + 0,typeof("" + 0))  //0->"0 string"

console.log(""+(-0)) //(-0)->"0"


// array edge cases with strings
//empty array get converted to empty string
console.log([]+"Pankaj") // ""+"Pankaj"->Pankaj"

console.log(""+[]) // ""->"" / empty

console.log("" + {}) //"[object Object]"

console.log("Pankaj" + {x:20}) //"Pankaj[object Object]"

console.log([1,2,3,null,4,5])  //[1,2,3,null,4,5]

console.log([1,2,3,null,4,5]+"") //1,2,3,,4,5

console.log([1,2,3,null,4] + "Pankaj") //1,2,3,,4Pankaj

console.log([undefined,null] + "DummyVal") // ",DummyVal"

// ToNumber
console.log(0 - "010") // treated as a decimal no anything in strngs starteing with 0 //-10

console.log(0 - 010) //without quotes number starting with zero will be treated as Octal no //-8

console.log(0 - "0xb") //hexadecimal number //-11

console.log(0 - 0xb) //again considered as hexadecimal //-11

console.log([] - 1) //-1

console.log([""] - 1) //-1 

console.log(["0"] - 1) //-1

console.log(["6"] - 1) //5

console.log([6,2] - 1) //NaN

// Why we need Abstract equality if we have === ?
// As JS is basically a loosely-typed language so using === gives developer a shield as per se but if we want a shield then why to use JS 
// so we should be clear about the usage of equality operator okay 

// like console.log(typeof(100)=='number') // then why to use === here we know about this

// there is also a catch that === will be faster than == as less operatns in === but there is tradeoffs 
// finally then would be decided as the situatn rises


