// Today's focuson ToBoolean Abstarct Operatn
// Falsy Values->['',+0,-0,0,NaN,undefined,null,false] are always results in false
// rest every value is true including an object(whether be empty) and symbol also
 
// !Not Operator uses  ToBoolean(x) as the expression is !x then it startes ecaluating with the help of Not Op

console.log(!20)
console.log(!'Check this')
console.log(!NaN)
console.log(!"Pankaj")


//== vs ===  (Both of them checks type first then do rest process)
// For abstract equality we check for 

// LeftArg(X)                     Right LeftArg(Y)               Operation(ToNumber)
// String                         Number                         ToNumber(X) then again do coamparison
// Number                         String                         ToNumber(Y) then again do coamparison
// Boolean                        Any Type                       ToNumber(X) then again check which rule will apply
// Any Type                       Boolean                        ToNumber(Y) then again check which rule will apply
// Number/String/Symbol           Object                         ToPrimitive(Y) then again check which rule will apply
// Object                         Number/String/Symbol           ToPrimitive(X) then again check which rule will apply

//rule x=null , y=undefined => x==y =>true and vice versa is also true i.e. if x=undefined and y=null it also returns true
console.log(null == undefined)
console.log(undefined == null)

console.log(12 == '12')
//number == string =>string converts to Number then => 12==12 true

console.log(false == '0')
//Boolean and String =>Boolean converts ToNumber then=> 0 == '0' then Number converts to Number then => 0==0 true

console.log(undefined == false) // no rule satisfied so it will return false

console.log(97 == 'a') //Number  and String => ToNumber('a') =>NaN then type os both operands is    Number so now checking via Equality operator id any operand is NaN then out out is false
//false
