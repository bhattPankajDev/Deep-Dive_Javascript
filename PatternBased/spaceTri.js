function createSpaceTri(rowC){
    let countr=1;
    let totSpace=rowC-1;
    let totStCountr=1;
    for(let count=1;count<=rowC;count+=1){
       let spPatt="";
       ///Print space first
       for(let space=1;space<=totSpace;space+=1){
          spPatt+=' ';  
       }
       
       ///Print pattern then
       let stPatt="";
       for(let stCount=1;stCount<=totStCountr;stCount+=1){
           stPatt+='*';
       }
       console.log(spPatt+stPatt);
       totSpace-=1;
       totStCountr+=1;
    }
   }
   
   createSpaceTri(5);
   console.log("+++++++++++++++++");
   createSpaceTri(8);
   console.log("+++++++++++++++++");
   createSpaceTri(10);