let row = 5;
// let stCount=5;
for(let itr=1;itr<=row;itr++){
    let output="";
    for(let countr=1;countr<=row;countr++){    //string are IMMUTABLE in JS 
       output+='* ';
    }
    console.log(output);
}