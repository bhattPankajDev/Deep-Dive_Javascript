// This could be used when we want access outside of block scope or manyatimes could be used with try/catch also

function fun(x){
    let val;
    if(x % 2==0){
        val = 0;
    }
    else{
        val = 1;
    }
    console.log(`The value is ${val}`)
}

//this can be seen although both does the same work // this is preferred in thises cases
function gun(x){
    if(x % 2 == 0){
        var val = 0;
    }
    else{
        var val = 1;
    }
    console.log(`This is gun functn value is ${val}`);
}

gun(20);