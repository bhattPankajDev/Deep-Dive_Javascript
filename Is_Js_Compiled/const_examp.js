// It is like let only i.e. restricted to block and once intilaised 
// redeclaration is not allowed although updation is allowed in case os arrays and objects

console.log("Lala")   //this didn't failed at parsing phrase 
console.log("The password is ",passwrd)  //checking TDZ same as let failed error raised
const passwrd = "rememberme";

//passwrd = "updatepasswrd"  //error

const obj = {x:100}

obj.y = 200;    //updation allowed of objects

// obj = {}        // redeclartion as a whole is not allowed

//although there are ways to create objects fully constant
