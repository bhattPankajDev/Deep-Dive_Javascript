let numb=100;   //number either be integer,float,higer precision float all types of numbers
let nameUser='Pankaj Chandra Shekhar Bhatt';   //String 3 ways to create 
let firstname = "Pankaj";
let lastname = `Bhatt`;
let middle = 'Chandra Shekhar';
console.log("Name is -> %s , First name is %s , Last name is %s and Middle name is -> %s ",nameUser,firstname,lastname,middle);

var isGood = true;
console.log("Light is there ? -> ",isGood)

//Javscript object useful for key value pair storing purposes
//collection of different types of values wheteher be it primitive or non-primitive
let phone = {
    name : 'Samsung',
    price : 12000,
    year : 2020,
    stillSale : true
}

console.log(phone)
console.log("Phone info-> %s , brand - %s , price - %d , year of manufactoring - %s and stillInUse : ",phone, phone.name,phone.price,phone.year,phone.stillSale)

let imp_inp = undefined   //something not defined now may be defined later for that purpose
//undefned use case is when I will initilais=ze / know the value of something in future right now I dont know so undefined is set to it 

//null 
//this is used to initilise anything with empty 

console.log(10/null);      //Infinity

//Nan //Not a number is a type of number 
//used when we used to return something which is not a number

firstInp = NaN;
secInp = NaN;
if(firstInp === secInp){
    console.log('Bothe the variables are saeme');     //2 corresponding NaN are neither equal with each other (only no in JS t.e. is not equal to itself)
}
else{
    console.log('Unequal values')
}


console.log(undefined/100);   //NaN


console.log('Pankaj'/2);    //NaN
console.log('Pankaj'*2);    //NaN
console.log(NaN=='Pankaj')  //false


// Date-01-02-2023
console.log('Pankaj'+2)     //Pankaj2    concatenation
console.log(200/0)          //  Infinity
console.log(NaN+1000)       //NaN