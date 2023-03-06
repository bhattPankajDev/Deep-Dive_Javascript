// This involves the concept of conversion of primitive types into object type
// Primtive type dont have functions defined on them so if we use some functions on primtive it get fails 
console.log("Now with Number")
// console.log(1.toString())  //error directly not allowed on primitive
// console.log("1".toString())   //On String allowed  autobocxing
console.log((1).toString())   //when we wrap around parenthesis then worked

// console.log(undefined.toString())     //error 
console.log("undefined".toString())      //undefined autoboxing
// console.log((undefined).toString())   //error

console.log("Boolean started")
console.log(true.toString())             //autoboxing

console.log("true".toString()) //true   //autoboxing

console.log((true).toString())          //manualboxing

// is String primitive if yes why we are able to use .toLowerCase() , Len() functions on it ?
// In JS we have hthis concept which invoves using mthods on top of primitives actually this happens because prototypal inheritanve in these instances
// (Object is inherited) this concept is known as boxing we have a box wrapper around primitives it is of 2 types autoboxing and manual boxing.
// As you can see here when you try to use a method on a primitive value JavaScript automatically does the boxing, and in consequence

// ManualBoxing and Gotchas

// In general, using the boxed object wrapper directly isn’t usually a good idea because there are some gotchas related to him, and you have to be careful if you don’t want unexpected results.

// Consider the following examples:

// const a = new Boolean(true)
// if(a) console.log("it's true")// it's true
// const b = new Boolean(false)
// if(!b) console.log("never runs");// objects are “truthy.“
// const c = Object(false)
// if(!c) console.log("never runs"); // objects are “truthy.“
// The problem here is that you are creating an object wrapper around a false value, but objects are “truthy.” So, if you want to box a primitive value manually, be careful,
//namy atimes the whole picture/scene can change