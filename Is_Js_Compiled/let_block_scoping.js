//  how let is goig to evalutae in parse phrase 
// Check local notes  

var teacher = "Pankaj";       // teacher-> global
function fun(){               // fun -> global 
    console.log(teacher);     // undefined

    var teacher = "Pulkit";   //teacher -> scope fun
    let content = "JS";       // content -> scope fun
    if(content === "JS"){     
        let hours = "120+";   // hours -> scope block  
        console.log(content , hours);
    }
    console.log(teacher , content)  // Pulkit JS
    console.log(teacher , content, hours)  // hours not accessible here so error
}

fun();
console.log(teacher);        //Pankaj