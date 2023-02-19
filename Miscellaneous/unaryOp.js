 //unary +
let str = '22';   
let x = +str;      //works on a single operand and try to converts type to number if possible
console.log(" Value is %d and type is %s and the type of original is here str is %s",x,typeof x,typeof str);

let inp='A';
let num_inp = +inp;
console.log(' The value if unary converted inp is ',num_inp);  //returns NaN because if there is some issue in conversion then it would result in
                      // invalid no in JS invalid no == NaN

//Unary - is also there
//It exactly works like + unary operator the only change is it converts into negative no is if possible 
let z = -str;
console.log('The value of z is %d and the type is %s ',z,typeof z);