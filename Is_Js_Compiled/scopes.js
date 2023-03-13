// Scopes in JS 
// Can be understood as the concept of visibility like the region till that something has significance
// as in games we have scopes in some game specially shooting games if we use scope then we are able to shoot someone
// Here in programming visibility for variables and fucntions
// Mostly 2 operations happen in code in one of the following 2 ways:
// 1-> Either we are assigning some value
// 2-> Either we are fetching some values
   //Pre to this quesn is => Is JS compiled or interpreted ? 
//    Go to interpret.js and compile.js so we got to know that JS is not completely Inter and completely compiled okay

// So JS have a hybrid architecture means it gets somehow compiled AWA(as well as ) interpreted also 
 
// JS code executes in 2 phases->
//1) Parsing 
//2) Execution
// JS first reda sthe whole code and then does parsing b
// Parsing->  In this the major step happens or the main thing happens is called as scope resolution 
//   Scope resolution means allocating every variable and function the a particular scope where it belongs.
//    4 types of scopes in JS 
//       Global Scope
//       Module Scope
//       Function Scope
//       Block Scope
//how to identify diff scopes 
// Before some discussion on let,var & const


// sort of scope question try??
// var fun = "123";
// function fun(){ //while parsing phrase we saw it but nothinh will happenn it will not rewrite it as we are not using functn expression
//    return "fun2";
// }
// console.log(fun)   //output is 123

// But if we try to call the functn is fails 

// if we have this at line no 33 then  console.log(fun())   //error ->logical easy
//fun will belong to global scope there is only single assignment 
 