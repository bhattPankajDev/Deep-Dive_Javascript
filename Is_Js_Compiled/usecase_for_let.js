for(var itr=0;itr<10;itr++){
    var y  = itr+10;
}
console.log(itr , y) //we are outside of loop still able to use itr and y even though it shouldn't as 
//not sounds logically right so this is a use case 

function process(x,y){
    if(x>y){
        var temp = x;
        x = y;
        y = temp;
    }
    //here we are stll able to use temp even though not required so this is a place to use let to use rather than var
    return y-x;
}
console.log(process(30,10))

// the usage more or less revolves around when we want it to inclusive to the block scope 