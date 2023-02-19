let x = 2020;
let y = 1020;

function getGCD(x,y){
    if(y==0){
        return x;
    }
    return getGCD(y,x%y);
}

console.log(getGCD(x,y));
console.log(getGCD(350,480));
console.log(getGCD(120,180));