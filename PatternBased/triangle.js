function createTri(rowC){
 let countr=1;
 for(let count=1;count<=rowC;count+=1){
    let stPatt="";
    for(let stCount=1;stCount<=count;stCount+=1){
        stPatt+='* ';
    }
    console.log(stPatt);
 }
}

createTri(3);
createTri(8);
createTri(10);