function fun(){  //fun->global
    var x =10;   //x->scope fun
    function gun(){  // scope fun
        var y = 20;  // scope gun
        console.log(x);  
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y); //error as in this scope aws outside of this scope nowhere  y is there 
}

fun(); 