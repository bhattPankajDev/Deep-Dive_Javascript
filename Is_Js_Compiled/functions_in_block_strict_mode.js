// // functions in block ->it will get outside scope of the wrapping environment scope (the scope where block is present)
// {
//     function fun(){
//         return "123"
//     }
// }
// console.log(fun) 
// // [Function fun] will work so it is like fun will take the scope of that thing which is out (will be pointing to global scope)
// //  of block in this case global sciope is there outside {}


// Case in strict mode
"use strict";
{
    function fun(){        //fun scopwe will be block scope only
        return "123"
    }
}
console.log(fun) //error it restricts function to the wrapped block only 