// Lexical scope it comes from the word lex means before execution or during parsing(compilation) the scope of variables and functions are defined before hand (ore execution or before run time)
// example Languages -> JS 
// basically here we follow like how the code is defined at compile time where the functions are defined and all (kahan pr likha uss hisaab se)
//Case Lex ->
var teacher = "Pankaj";  //teacher->global
function ask(question){  // ask->global
    console.log(teacher,question) 
}
function fun(){   //fun also takes global
    var teacher = "Akshat"; //teacher->fun scope
    ask("why ? ");
}
fun();
//output->  
// Pankaj why
// 

// case 2 
// dynamic scoping whereas in this scope resolutiion takes place during run time 
// example -> bashscript
// here we follow how the code is called during run time (at the time of calling what's the situatn)
//Case Dynamic ->

var teacher = "Pankaj";  //teacher->global
function ask(question){  // ask->global
    console.log(teacher,question) 
}
function fun(){   //fun also takes global
    var teacher = "Akshat"; //teacher->fun scope
    ask("why ? ");
}
fun();
// in this case no scope allocation takes place before execution directly execution will start okay as per the call status 
// here when we called fun it will call ask then ask will point back to fun for teacher okay so the output will be "Akshat why ?"


