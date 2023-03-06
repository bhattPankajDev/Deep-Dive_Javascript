// Snipppet 1->
// console.log("This is Pankaj")    //error at line 4
// function randomUsage(){
//      console...log("Is Valid")   
// }
// console....log("Outer is Valid")
//The fact of the matter is if it is interpreted then I should see the console statement "This is Pankaj" but it is n't the case so seems like compiled right now
// not like interpret language or it is not purely interpreted

//Snipet 2 ->
// function randomUsage(){        //error at line 12
//      console...log("Is Valid")   
// }
// console.log("This is Pankaj ->2")
// console....log("Outer is Valid")


// again same example just see 
//Snippet 3 ->
// console....log("Outer is Valid") //error at line 22 not at line 20
// function randomUsage(){
//     console...log("Is Valid")   
// }
// console.log("This is Pankaj ->2")


// Because in interpreted language things get printed till the time it throws an error but here we see this right? 