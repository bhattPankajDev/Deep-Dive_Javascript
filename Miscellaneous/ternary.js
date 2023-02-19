let x = 100>90 ? true : false;
let num = 20;
let y = checkEven(num)? 'Even' : 'Odd';
console.log("Value of num is %d and it is %s",num,y);

function checkEven(num){
     return num%2==0; 
}
