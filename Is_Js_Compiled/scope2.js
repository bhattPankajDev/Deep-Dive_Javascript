// Ex- 1
// var teacher = "Pankaj";
// function fun(){
//     var teacher = "Pulkit";
//     content = "JS"; //during excecution phrase it will create a auto global variable 
//     console.log(teacher)
// }
// function gun(){
//     var student = "Sarthak";
//     console.log(student)
// }

// fun();
// gun();
// console.log(teacher)
// console.log(content)


// Ex- 2
// var teacher = "Pankaj";
// function fun(){
//     var teacher = "Pulkit";
//     content = "JS";
//     console.log(teacher)
// }
// function gun(){
//     var student = "Sarthak";
//     console.log(student)
// }
// console.log(content)    //this will throw an error not created till now in global scope 
// fun();
// gun();
// console.log(teacher)

// Ex - 3
// console.log(content)     // similarly like Ex- 2 
// var teacher = "Pankaj"; 
// function fun(){
//     var teacher = "Pulkit";
//     content = "JS";
//     console.log(teacher)
// }
// function gun(){
//     var student = "Sarthak";
//     console.log(student)
// }

// fun();
// gun();
// console.log(teacher)


// Ex-4
// console.log(content)  // this will give error because no variable created tilll this point 
// content = "Pankaj"