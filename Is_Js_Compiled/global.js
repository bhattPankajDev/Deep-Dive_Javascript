// console.log(name)

// var name = "Pankaj";
// function demo(){
//     console.log(name)
// }
// console.log(name)
// here name is global variable

// Examples for var usage 
// var only knows function scope and global scope
// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // Expected output: 2
// }

// console.log(x);
// Expected output: 2

//Block scope is simple {}  like if and for {} or user defined {} 
//So here in above ex both cases it printed 2 in both cases and it updated the same variable as this is block scope

// when you define something under function scope then that thing can be used inside it 

// Ex-1

// function exampleFunction() {
//     const x = "declared inside function"; // x can only be used in exampleFunction
//     console.log("Inside function");
//     console.log(x);
//   }
  
//   console.log(x); // Causes error

//var is only accessible in global scope and function scope and var has no idea about block scoping 
function exampleFunction() {
    var x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
  }
  
  console.log(x); // Causes errorEx-2  

//   only let and const are suposed to be block scope

//way to make variable global 

// const
//1 decare it outside of everyting else like above
  
// Other info about Const 
// The value of a constant can't be changed through reassignment (i.e. by using the assignment operator),
// and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object 
// or array its properties or items can be updated or removed.