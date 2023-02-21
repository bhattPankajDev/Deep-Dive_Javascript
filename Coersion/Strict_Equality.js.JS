// ===
// Algo
// 1) Type of X and Y if unequal then return false
// 2) If type is Number then =>
//       X is NaN then return false 
//       Y is NaN then return false 
//       If both are same then return true   
//       X is +0 or Y is -0 return true and alternate is also true
// 3) If different type then return SameValueNonNumber(X,Y) =>
//SameValueNonNumber(X,Y)=>   (Abstract Qperation)
// 1) Assert X is not Number
// 2) Assert both of them have same type as Type(Y)
// 3) Type(X) is Undefined , returns true
// 4) Type(X) is Null , return true
// 5) Now type is String then check whetheer both are exactly same or not 
// 6) Now type is boolean then check whether both are true por not otherwise false
// 7) Similarly for symbol and object too this way 
console.log(undefined === undefined) //true
console.log(null === null) //true
console.log(2==='2') //false
console.log(NaN === "NaN") //false
console.log(-0 === +0)  //true
let obj1={x:100 , y:200}
let obj2={x:100 , y:200}
console.log('Object a is %s and object2 is %s',obj1,obj2)
console.log(obj1===obj2) //false because here it checks with respect to the memory address pointing by both of the objects 

// The only difference between regular (==) and strict (===) equality is that the strict equality operator disables type conversion. Since you're already comparing two variables of the same type, the kind of equality operator you use doesn't matter.

// Regardless of whether you use regular or strict equality, object comparisons only evaluate to true if you compare the same exact object.

// That is, given var a = {}, b = a, c = {};, a == a, a == b, but a != c.

// Two different objects (even if they both have zero or the same exact properties) will never compare equally. If you need to compare the equality of two object's properties

console.log({x:20} === {x:20}) //false 