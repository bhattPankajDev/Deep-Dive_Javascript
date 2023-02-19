// ToPrimitive() is a abstract function
// toPrimitive abstract functn wil convert an object into non-Object type if possible
// toPrimitive(input,[preferred type(in which you want to convert)])
//   =>above more explainatn=> if there is a possiblity of conversion into one or more type (so to make the conversion easier we have a concept of preferred type that set up the value of hint)
//   =>on-object types/primitives type then if we define a preferred type the conversion becomes easy as we have upfront defind the type here

// In JS we have algo steps in ToPrimitive is => if the preferred type is none then default/hint is default (and by default "default" sets the value of hint to Number) 
                                            //=> if the preferred type is string then hint is set to string 
                                            //=> if the preferred type is number then hint is set to number
                                            //=> Some work happens then (let's say task "X") 
                                            //=>(X WILL BE DEFINED LATELY) 
                                            //=>THEN AFTER DOING ALL STEPS THEN WE CALL OrdinaryToPrimitive(object,hint) in the end
                                            //want to check anything then check documentation


//discussion on valueOf and toString

let obj = {}
console.log(obj.toString())
console.log(obj.valueOf())

obj={ x : 30}
console.log(obj.toString())
console.log(obj.valueOf())  
// we can rewrite the function toString() and valueOf() ACT our will 


//ToPrimitive in action 

let object = {}                                            
console.log(10 - object);   //here - operator will use ToNumber abstract operator on leftArg aswellas rightarg

//toNumber(Object)->will callT ToPrimitive(Object) default hint will be set to Number then (pre to this check type of Object or not )
// Methods valueOf() then toString() will be applied on Object if any of them returns non-Object type then stop otherwise TypeError

// Note->>
// valueOf() return an Object to which it is called as it is 
// toString() return a string "[object Object]" (this is a string) but wehen we have a string object then returns it as a primtive value


let object1 = {x:10}
console.log(10 - object1);

let object2={
    x : 20,
    valueOf(){
        return 99 
    } 
}
console.log(100 - object2);

let object3 = {
    x : 20,
    toString(){
        return 'Changed return type'
    } 
}
console.log(100 - object3);

let object4 = {
    x : 20,
    toString(){
       return '15'
    } 
}
console.log(100 - object4);

let object5 = {
    x : 20,
    toString(){
        return {}
    } 
}
// console.log(100 - object5);  this will throw erro

console.log('Now /"+/" OPERATOR examples');

// + operator
let res1 = 10 + object1;
console.log(res1,typeof res1);

let res2 = 10 + object2
console.log(res2,typeof res2);

let res3 = 10 + object3
console.log(res3,typeof res3);

let res4 = 10 + object4
console.log(res4,typeof res4);

// console.log(object4 + object5)     this will throw error
let res5 = "100" + 10
console.log(res5,typeof res5);

//console.log(object+ object5);      this will throw error