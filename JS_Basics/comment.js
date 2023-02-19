//single line comment 
//usage of / is required


/*
let str = 'Check this ' This is a multiline comment 
 check this again
*/

function powerCalc(a,b){
     if(b==0){
        return 1;
     }
     smallAns = powerCalc(a,b-1);
     return a*smallAns;
}

// base = prompt('Enter the value of a and b, first enter \"a\" i.e. a the base of power -> ');
// pow = prompt('Enter the value of a and b, now enter b i.e. b is the  power -> ');
base = 8 , pow=3;
result = powerCalc(base,pow)
console.log(result)
console.log('Checking \"double quotes\" just')
